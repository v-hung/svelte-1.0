import SvelteKitAuth from "@auth/sveltekit"
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import CredentialsProvider from "@auth/core/providers/credentials";
import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import type { Adapter } from '@auth/core/adapters';
import prisma from "$lib/server/prismadb"

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// export const handle = SvelteKitAuth({
//   adapter: PrismaAdapter(prisma) as Adapter,
//   // session: {
//   //   strategy: "database",
//   //   generateSessionToken: () => { 
//   //     return crypto.randomUUID();
//   //   }
//   // },
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//     updateAge: 24 * 60 * 60, // 24 hours
//     generateSessionToken: () => { 
//       return crypto.randomUUID();
//     }
//   },
//   providers: [
//     // GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
//     Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET}),
//     CredentialsProvider({
//       id: 'credentials',
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text ", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         const { email, password } = credentials as {
//           email: string,
//           password: string
//         }

//         const user = { id: "2", name: "Việt Hùng", email: "viet.hung.2898@gmail.com", password: "Admin123!" }

//         if (email != user.email) {
//           // throw new Error(JSON.stringify({
//           //   text: "Credentials",
//           //   detail: {
//           //     'email': 'Email not found'
//           //   }
//           // }))
//           throw new Error("Email not found")
//         }
  
//         if (password != "Admin123!") {
//           throw new Error("Password not found")
//         } 

//         const data = {
//           id: user.id,
//           name: user.name,
//           email: user.email
//         }
      
//         return data
//       }
//     })
//   ],
//   events: {

//   },
//   pages: {
//     signIn: '/auth/login',
//   }
// });

export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/custom')) {
    return new Response('custom response');
  }
 
  const response = await resolve(event);
  return response;
}