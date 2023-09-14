import User from "@models/user";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();
      return session;
    },
    signIn: async ({ profile }) => {
      try {
        await connectToDB();

        const isUserExists = await User.findOne({ email: profile.email });

        if (!isUserExists) {
          await User.create({
            email: profile.email,
            username: profile.username.replace(" ", "").toLowerCase(),
            image: profile.image,
          });
        }
      } catch (error) {}
    },
  },
});

export { handler as GET, handler as POST };
