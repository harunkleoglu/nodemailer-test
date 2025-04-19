import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials.username === "demo" &&
          credentials.password === "demo"
        ) {
          return { id: "1", name: "Demo Kullanıcı" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // özel login sayfası
  },
};

export default authConfig;
