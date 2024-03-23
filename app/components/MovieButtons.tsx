"use client";

import React, { useState } from "react";
import { InfoIcon, PlayCircle } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import VideoModel from "@/app/components/VideoModel";
import { MovieButtonsProps } from "@/types";

const MovieButtons = ({ title, overview, youtube, id }: MovieButtonsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="inline-flex gap-x-2 font-semibold text-lg"
      >
        <PlayCircle className="w-6 h-6" />
        Play
      </Button>
      <Button className="inline-flex gap-x-2 font-semibold text-lg bg-white/30 hover:bg-white/20 text-white">
        <InfoIcon className="w-6 h-6" />
        Learn More
      </Button>

      <VideoModel
        id={id}
        isOpen={isOpen}
        setOpen={setIsOpen}
        title={title}
        overview={overview}
        youtube={youtube}
      />
    </>
  );
};

export default MovieButtons;
