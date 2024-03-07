import Image from "next/image";
import Link from "next/link";
import React from "react";
import drop from "@/public/Dropbox.svg";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggler";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <div>
        <Link href="/" className="flex items-center justify-evenly">
          <div className="bg-blue-600">
            <Image
              src={drop}
              height={34}
              width={34}
              alt="Dropbox"
              //className="invert mix-blend-multiply"
            />
          </div>
          <h1 className="font-bold text-xl">DROPBOX</h1>
        </Link>
      </div>
      <div className="px-5 flex items-center gap-x-2 md:gap-x-5">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
