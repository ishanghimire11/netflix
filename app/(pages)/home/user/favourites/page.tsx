import React from "react";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import Image from "next/image";
import MovieCard from "@/app/components/MovieCard";

const getFavouritesList = async (userId: string) => {
  const data = await prisma.watchList.findMany({
    where: { userId: userId },
    select: {
      Movie: {
        select: {
          id: true,
          title: true,
          age: true,
          duration: true,
          overview: true,
          releaseDate: true,
          youtube: true,
          imageUrl: true,
          WatchLists: true,
        },
      },
    },
  });
  return data;
};

const FavouritesList = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return null;
  const data = await getFavouritesList(session?.user?.email as string);

  return (
    <div className="lg:mt-8 mt-6">
      <h1 className="text-4xl font-semibold pb-8">Your watchlist</h1>
      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {data.map((movie) => (
            <div key={movie.Movie?.id} className="rounded-md relative group">
              <Image
                src={movie.Movie?.imageUrl as string}
                alt=""
                width={768}
                height={768}
                className="w-full h-[325px] object-cover rounded-md hover:brightness-[25%]"
              />
              <div className="absolute hidden group-hover:block top-0 left-0 p-4 bg-gradient-to-b from-black/20 via-black/60 to-black z-10 w-full h-full rounded-m">
                <MovieCard
                  title={movie.Movie?.title as string}
                  overview={movie.Movie?.overview as string}
                  id={movie.Movie?.id as number}
                  duration={movie.Movie?.duration as number}
                  youtube={movie.Movie?.youtube as string}
                  watchLists={
                    (movie.Movie?.WatchLists.length as number) > 0
                      ? (true as boolean)
                      : (false as boolean)
                  }
                  watchListId={movie.Movie?.WatchLists[0]?.id as string}
                  age={movie.Movie?.age as number}
                  releaseDate={movie.Movie?.releaseDate as number}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-6 lg:mt-8">
          Nothing found. Add some to your watchlist.
        </div>
      )}
    </div>
  );
};

export default FavouritesList;
