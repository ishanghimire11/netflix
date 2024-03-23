import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VideoModelProps } from "@/types";

const VideoModel = ({
  isOpen,
  setOpen,
  title,
  overview,
  youtube,
}: VideoModelProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(value: boolean) => setOpen(value)}>
      <DialogContent className="max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] rounded-lg border-muted-foreground overflow-y-scroll max-h-[90%]">
        <DialogHeader>
          <DialogTitle className="text-left text-3xl">{title}</DialogTitle>
          <DialogDescription className="text-left">
            <p className="text-white text-lg pb-4">{overview}</p>
            <iframe
              src={youtube}
              className="w-full h-[300px] sm:h-[480px] lg:h-[600px]"
              width={768}
              height={768}
            ></iframe>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModel;
