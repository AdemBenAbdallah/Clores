import { getServerSession } from "next-auth/next";

import prisma from "@/lib/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";



export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    console.log(session)
    
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
    
  } catch (error) {
    return null;
  }
}
