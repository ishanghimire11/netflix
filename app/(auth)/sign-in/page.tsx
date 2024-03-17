import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <div>
      <Button variant={"link"}>
        <Link href={"sign-up"}>Sign up</Link>
      </Button>
    </div>
  );
};

export default SignIn;
