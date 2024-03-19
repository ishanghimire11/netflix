"use client";

import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/components/ui/form";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

import { SignUpformSchema, signUpformSchema } from "@/validation/validation";
import Image from "next/image";

const SignUp = () => {
  const { data: session } = useSession();

  if (session) redirect("/home");

  const form = useForm<SignUpformSchema>({
    resolver: zodResolver(signUpformSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (input: SignUpformSchema) => {
    console.log(input);
  };

  return (
    <div className="py-12 px-10 bg-black/40 md:bg-background/80 rounded-md md:w-96">
      <h1 className="font-bold text-4xl pb-12">Sign Up</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="bg-foreground text-background"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="bg-red-600 text-white hover:bg-red-700 w-full"
          >
            Sign Up
          </Button>
        </form>
      </Form>

      <div className="mb-8">
        Already have an account?
        <Button variant={"link"} className="p-0 ml-2">
          <Link href={"/sign-in"} className="underline">
            Sign in.
          </Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <Button type="button">
          <Image
            src="/assets/github.png"
            className="w-7 h-7 rounded-full"
            width={28}
            height={28}
            alt=""
          />
        </Button>
        <Button type="button">
          <Image
            src="/assets/google.webp"
            className="w-7 h-7 rounded-full"
            width={28}
            height={28}
            alt=""
          />
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
