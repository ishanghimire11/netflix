import React from "react";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import Image from "next/image";
import MovieCard from "@/app/components/MovieCard";

const getData = async (path: string, userId: string) => {
  switch (path) {
    case "tv": {
      const data = await prisma.movie.findMany({
        where: { category: "show" },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          youtube: true,
          imageUrl: true,
          overview: true,
          releaseDate: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    case "movies": {
      const data = await prisma.movie.findMany({
        where: { category: "movie" },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          youtube: true,
          imageUrl: true,
          overview: true,
          releaseDate: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    case "recent": {
      const data = await prisma.movie.findMany({
        where: { category: "recent" },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          youtube: true,
          imageUrl: true,
          overview: true,
          releaseDate: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    default: {
      throw new Error();
    }
  }
};

const CategoryPage = async ({ params }: { params: { genre: string } }) => {
  const session = await getServerSession(authOptions);
  const data = await getData(params.genre, "dd");
  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
      {data.map((movie) => (
        <div key={movie.id} className="rounded-md relative group">
          <Image
            src={movie.imageUrl}
            alt=""
            width={768}
            height={768}
            className="w-full h-[325px] object-cover rounded-md hover:brightness-[25%]"
            priority
          />
          <div className="absolute hidden group-hover:block top-0 left-0 p-4 bg-gradient-to-b from-black/20 via-black/60 to-black z-10 w-full h-full rounded-m">
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              id={movie.id}
              duration={movie.duration}
              youtube={movie.youtube}
              watchLists={movie.WatchLists.length > 0 ? true : false}
              watchListId={movie.WatchLists[0]?.id}
              age={movie.age}
              releaseDate={movie.releaseDate}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
