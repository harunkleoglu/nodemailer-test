import NextAuth from "next-auth";
import authConfig from "./auth.config";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST }; // API route için
export default handler; // Default export for Next.js API routes
