"use client";

import React, { useState } from "react";
import { MovieCardProps } from "@/types";
import {
  CalendarIcon,
  Heart,
  PlayCircle,
  TimerIcon,
  Users2,
} from "lucide-react";
import { Button } from "./ui/button";
import VideoModel from "./VideoModel";

const MovieCard = ({
  id,
  title,
  duration,
  overview,
  watchListId,
  youtube,
  watchLists,
  age,
  releaseDate,
}: MovieCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="top-2 right-4 absolute z-10">
        {watchLists ? (
          <form>
            <Button variant={"ghost"} size={"icon"} className="border-0 p-0">
              <Heart
                className="w-6 h-6 text-red-500 hover:fill-transparent"
                fill="red"
              />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant={"ghost"} size={"icon"} className="group border-0">
              <Heart className="w-6 h-6 hover:fill-red-500" />
            </Button>
          </form>
        )}
      </div>
      <div className="absolute -translate-x-2/4 left-2/4 top-2/4 -translate-y-full">
        <Button
          variant={"link"}
          size={"icon"}
          className="p-0 w-fit h-fit"
          onClick={() => setOpen(true)}
        >
          <PlayCircle className="w-16 h-16" strokeWidth="1" />
        </Button>
      </div>
      <VideoModel
        id={id}
        isOpen={open}
        setOpen={setOpen}
        title={title}
        overview={overview}
        youtube={youtube}
      />
      <div className="absolute bottom-4 pr-4">
        <h3 className="text-3xl font-semibold line-clamp-1">{title}</h3>
        <div className="mt-2 gap-x-4 flex">
          <p className="text-white leading-none flex items-center justify-center gap-x-1 text-sm">
            <CalendarIcon className="w-4 h-4" />
            {releaseDate}
          </p>
          <p className="text-white leading-none flex items-center justify-center gap-x-1 text-sm">
            <TimerIcon className="w-4 h-4" />
            {duration}h
          </p>

          <p className="text-white leading-none flex items-center justify-center gap-x-1 text-sm">
            <Users2 className="w-4 h-4" />
            {age}+
          </p>
        </div>
        <p className="line-clamp-2 mt-4">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
