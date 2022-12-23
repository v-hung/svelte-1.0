import SvelteKitAuth from "@auth/sveltekit"
import GitHub from '@auth/core/providers/github';
import CredentialsProvider from "@auth/core/providers/credentials";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "$lib/server/prismadb"

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// export const handle = SvelteKitAuth({
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: "database",
//     generateSessionToken: () => { 
//       return crypto.randomUUID();
//     }
//   },
//   providers: [
//     GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
//     CredentialsProvider({
      
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
  
//         if (email == "viet.hung.2898@gmail.com" && password) {
//           // Any object returned will be saved in `user` property of the JWT
//           return { id: "1", name: "J Smith", email: "jsmith@example.com" }
//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           return null
  
//           // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//       }
//     })
//   ],
//   pages: {
//     signIn: '/auth/login',
//   }
// });

export async function handle({ event, resolve }) {
  const response = await resolve(event);
  return response;
}