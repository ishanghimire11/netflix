import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-backgound md:bg-transparent">
      <Image
        src={"/assets/login-bg.jpg"}
        alt=""
        className="hidden md:inline-block w-full h-full absolute -z-10 object-cover brightness-[30%]"
        fill
      />
      <Image
        src={"/assets/logo.svg"}
        width={400}
        height={400}
        alt=""
        className="w-40 h-40 absolute top-8 left-8 md:left-16"
        priority
      />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
