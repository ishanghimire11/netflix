import React from "react";
import prisma from "@/app/utils/db";
import { Button } from "@/app/components/ui/button";

export async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      id: true,
      imageUrl: true,
      title: true,
      age: true,
      duration: true,
      overview: true,
      releaseDate: true,
      youtube: true,
      source: true,
      category: true,
    },
  });
  return data;
}

const FeaturedVideo = async () => {
  const data = await getData();

  return (
    <div className="h-[60dvh] lg:h-[80dvh] pt-12 lg:pt-24">
      <video
        src={data?.source}
        poster={data?.imageUrl}
        muted
        // loop
        // autoPlay
        className="w-full absolute top-0 -z-10 left-0 h-[60dvh] lg:h-[80dvh] object-cover brightness-[30%]"
      ></video>
      <div className="mb-6 lg:mb-12">
        <h1 className="lg:max-w-[60%] font-semibold text-5xl lg:text-6xl xl:text-8xl pb-4">
          {data?.title}
        </h1>
        <p className="lg:max-w-[50%] line-clamp-3">{data?.overview}</p>
      </div>
      <div className="flex gap-x-4">
        <Button>rafce</Button>
        <Button variant={"outline"}>rafce</Button>
      </div>
    </div>
  );
};

export default FeaturedVideo;
