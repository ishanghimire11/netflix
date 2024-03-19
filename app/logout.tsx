"use client";

import React from "react";
import { Button } from "./components/ui/button";
import { signOut, useSession } from "next-auth/react";

const Logout = () => {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <div>
      <Button onClick={() => signOut()}>Log out? {session.user?.name}</Button>
    </div>
  );
};

export default Logout;
