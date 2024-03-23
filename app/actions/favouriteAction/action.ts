"use server";

import prisma from "@/app/utils/db";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/utils/auth";

export const addToFavourites = async (formData: FormData) => {
  const movieId = formData.get("movieId");
  const path = formData.get("pathname");
  const session = await getServerSession(authOptions);

  const data =
    movieId &&
    (await prisma.watchList.create({
      data: {
        userId: session?.user?.email as string,
        movieId: Number(movieId),
      },
    }));
  path && revalidatePath(`${path}`);
  return data;
};

export const removefromFavourites = async (formData: FormData) => {
  const watchListId = formData.get("watchListId") as string;
  const path = formData.get("pathname");

  watchListId &&
    (await prisma.watchList.delete({
      where: { id: watchListId },
    }));
  revalidatePath(`${path}`);
};
