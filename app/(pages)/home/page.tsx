import Navbar from "@/app/components/Navbar";
import Logout from "@/app/logout";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = async () => {
  return <div>hello</div>;
};

export default HomePage;
