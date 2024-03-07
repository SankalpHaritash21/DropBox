import { ArrowRight } from "lucide-react";
import Link from "next/link";
import drop from "@/public/Dropbox1.webp";
import Image from "next/image";
import Dropbox from "@/public/Dropbox.gif";

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
        <div className="flex flex-col  w-full justify-evenly">
          <div className="flex md:flex-row flex-col justify-evenly mt-10 mb-3 p-10">
            <div className="w-full md:w-1/2 flex items-center justify-center h-80 overflow-hidden rounded-2xl ">
              <Image
                src={Dropbox}
                alt="Dropbox"
                height={400}
                width={400}
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:items-center items-start justify-center h-80 overflow-hidden p-10">
              <h2 className="text-lg md:text-2xl font-bold mb-2">Feature</h2>
              <p className="text-gray-30000">
                <ul>
                  <li>
                    User Authentication: Secure sign-up, sign-in, and account
                    management powered by Clerk.
                  </li>
                  <li>
                    File Upload: Easy drag-and-drop functionality for seamless
                    uploading of files and PDF documents.
                  </li>
                  <li>
                    File Storage: Reliable storage powered by Firebase Cloud
                    Storage, ensuring scalability and availability.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-10 md:items-center items-start justify-evenly">
            <div className="w-full md:w-1/2 p-5">
              <ul>
                <li>
                  Responsive Design: Tailwind CSS enables a responsive layout
                  for optimal viewing on various devices.
                </li>
                <li>
                  Real-time Updates: Zustand provides real-time updates on file
                  actions for enhanced user engagement.{" "}
                </li>
                <li>
                  Secure Data Handling: Encryption, access control, and secure
                  transmission protocols prioritize user data security.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center h-80 overflow-hidden">
              <Image
                src={drop}
                alt="DropBox"
                width={400}
                height={200}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
