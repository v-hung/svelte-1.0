import { Server } from 'socket.io';

export default function injectSocketIO(server) {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ["GET", "POST"],
      // allowedHeaders: ["Access-Control-Allow-Origin"],
      credentials: true
    }
  })

  // io.use(function(socket, next){
  //   if (socket.handshake.query && socket.handshake.query.token){
  
  //   }
  //   else {
  //     next(new Error('Authentication error'));
  //   }    
  // })

  io.on('connection', async (socket) => {
    let user = null

    socket.emit('name', user?.id);

    socket.on('message', async (data) => {
      let users = await prisma.user.findMany({
        where: {
          rooms: {
            some: {
              id: data?.roomId
            }
          },
          // id: {
          //   not: data?.userId
          // }
        }
      })

      let message = await prisma.messages.create({
        data: {
          body: data?.body,
          roomId: data?.roomId,
          senderID: data?.userId
        }
      })

      users.forEach((user) => {
        io.to(user.id).emit('message', {
          message: message,
        });
      })
    });

    socket.on('join', async (userId) => {
      socket.join(userId)
      console.log('json ' + userId)
      // user = await prisma.user.findUnique({
      //   where: {
      //     id: userId
      //   },
      //   select: {
      //     id: true,
      //     name: true,
      //     email: true,
      //     image: true,
      //     password: true
      //   }
      // })

      // if (user)
        // socket.join(user?.id)
    })
  });

  console.log('SocketIO injected');
}
