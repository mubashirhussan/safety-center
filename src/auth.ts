import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};

        // ✅ Call Strapi login API
        const res = await fetch("http://localhost:1337/api/auth/local", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier: email, // Strapi uses "identifier" instead of "email"
            password,
          }),
        });

        const data = await res.json();

        if (res.ok && data?.user) {
          return {
            id: data.user.id,
            name: data.user.username,
            email: data.user.email,
            jwt: data.jwt, // we will store this in token below
          };
        }

        // If login failed
        throw new Error(data?.error?.message || "Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.jwt = token.jwt as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
// import NextAuth from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [
//     Credentials({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials ?? {};

//         // Static credentials
//         if (email === 'admin@gmail.com' && password === '123456') {
//           return {
//             id: '1',
//             name: 'Admin',
//             email: 'admin@gmail.com',
//           };
//         }

//         throw new Error('Invalid email or password');
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/auth/login',
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });
