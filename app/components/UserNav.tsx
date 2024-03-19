"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/app/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

const UserNav = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-10 h-10 md:w-12 md:h-12 cursor-pointer rounded-sm">
            <AvatarImage src="https://vpwituwuavmfyabszxzf.supabase.co/storage/v1/object/public/User%20Image/avatar.jpg" />
            <AvatarFallback>IG</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-[200px] md:w-[230px] py-2 border-primary-foreground px-4 shadow-md"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-primary-foreground" />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuSeparator className="bg-primary-foreground" />
          <Button
            variant={"ghost"}
            className="inline-flex gap-x-1 w-full justify-start px-2"
            onClick={() => signOut()}
          >
            <span>Sign Out</span>
            <LogOutIcon className="w-5 h-5" />
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
