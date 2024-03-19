import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/utils/auth";
import Navbar from "@/app/components/Navbar";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    return redirect("/sign-in");
  }
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-16">
      <Navbar />
      {children}
    </main>
  );
};

export default HomeLayout;
