import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="py-12 px-10 bg-background/80 rounded-md">
      <h1 className="font-bold text-4xl">Sign Up</h1>
      <div>
        Already have an account?
        <Button variant={"link"} className="p-0 ml-2">
          <Link href={"/sign-in"} className="underline">
            Sign in.
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
