import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>DropBox</h1>
      <UserButton />
    </main>
  );
}
