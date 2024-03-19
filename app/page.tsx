import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import SignIn from "./(auth)/sign-in/page";
import { Button } from "@/app/components/ui/button";
import Logout from "./logout";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/sign-in");
  redirect("/home");
}
