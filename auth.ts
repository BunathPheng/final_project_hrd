/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthConfig, User } from "next-auth";
import authService, { LoginCredentials } from "./service/auth/auth.service";

const config: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials): Promise<User | null> => {

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const loginCredentials: LoginCredentials = {
          email: credentials.email as string,
          password: credentials.password as string,
        };
        
        try {
          const response = await authService.loginService(loginCredentials); 
           
          if (response?.data.status === "OK") {
           
            return response?.data;
          } else {
           
            return response?.data || null; 
          }
        } catch (error) {
          console.error("❌ Error during credentials authorization:", error);
          return null;
        }
      },
    }),
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'openid email profile'
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({  account }) {
      
      if (account?.provider === "google" && account?.id_token) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL }/auths/google/sign-in/visitor`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idToken: account.id_token
            })
          });
          
          if (response.ok) {
            const userData = await response.json();
            console.log("✅ Google auth successful:", userData);
            return userData;
          } else {
            console.error("❌ Google auth failed:", response.statusText);
            return false;
          }
        } catch (error) {
          console.error("❌ Error during Google authentication:", error);
          return false;
        }
      }
      
      return true;
    },

    async jwt({ token, user, account }) {
      
      if (user) {
        token.user = user;
      }
      
      if (account?.provider === "google" && account?.id_token) {
        token.idToken = account.id_token;
      }
      
      return token;
    },

    async session({ session, token }) {
     
      if (token.user) {
        session.user = {
          ...session.user,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...token.user as any,
        };
      }
      
      if (token.idToken) {
        (session as any).idToken = token.idToken;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

export const { auth, signIn, signOut, handlers } = NextAuth(config);