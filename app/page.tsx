import { ArrowRight } from "lucide-react";
import Link from "next/link";
import drop from "@/public/d.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col w-full justify-center">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5 w-full justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to Dropbox.
            <br />
            <p className="text-lg md:text-3xl mt-4">
              Storing everything for you and your business needs. All in one
              place
            </p>
          </h1>
          <p>
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>
          <Link
            href="/dashboard"
            className="bg-blue-600 flex items-center justify-center  cursor-pointer p-5 w-fit rounded-xl font-bold text-xl"
          >
            Try It!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-evenly">
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fmsq1uKOa08?si=rtQlGNR0oBxexbBi?&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image src={drop} alt="DropBox" width={400} height={200} />
          </div>
        </div>
      </div>
    </main>
  );
}
