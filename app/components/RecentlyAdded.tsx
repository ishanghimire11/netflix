import React from "react";
import Image from "next/image";
import { getServerSession } from "next-auth";

import prisma from "@/app/utils/db";
import { authOptions } from "@/app/utils/auth";
import MovieCard from "@/app/components/MovieCard";

const getRecentlyAdded = async (userId: string) => {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      title: true,
      imageUrl: true,
      overview: true,
      WatchLists: { where: { userId: userId } },
      duration: true,
      youtube: true,
      age: true,
      releaseDate: true,
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 6,
  });

  return data;
};

const RecentlyAdded = async () => {
  const session = await getServerSession(authOptions);
  const data = await getRecentlyAdded(session?.user?.email as string);

  return (
    <div>
      <h2 className="text-4xl lg:text-5xl font-semibold pb-8">
        Recently Added
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
        {data.map((movie) => (
          <div key={movie.id} className="rounded-md relative group">
            <Image
              src={movie.imageUrl}
              alt=""
              width={768}
              height={768}
              className="w-full h-[325px] object-cover rounded-md hover:brightness-[25%]"
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
    </div>
  );
};

export default RecentlyAdded;
