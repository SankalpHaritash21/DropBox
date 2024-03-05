"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DataTable } from "./Table";

import { useUser } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { columns } from "./Columns";
import { FileType } from "@/types/type";

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const [docs, loading, error] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        orderBy("timeStamp", sort)
      )
  );

  useEffect(() => {
    if (!docs) return;

    const files: FileType[] = docs.docs.map((doc) => {
      return {
        id: doc.id,
        filename: doc.data().fileName,
        timestamp: new Date(doc.data()?.timeStamp?.seconds * 1000) || null,
        fullName: doc.data().fullName,
        downloadURL: doc.data().downloadUrl,
        type: doc.data().type,
        size: doc.data().size,
      };
    });
    setInitialFiles(files);
  }, [docs]);

  if (docs?.docs.length === undefined) {
    return (
      <div className="flex flex-col">
        <Button variant={"outline"} className="w-36 h-10 mb-">
          <Skeleton className="h-5 w-full" />
        </Button>
        <div className="border rounded-lg">
          <div className="border-b h-12">
            {skeletonFiles.map((file) => (
              <div key={""} className="flex items-center space-x-4 p-5 w-full">
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-12 w-full" />
              </div>
            ))}
            {skeletonFiles.length === 0 && (
              <div className="flex items-center space-x-4 p-5 w-full">
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-12 w-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-5 pb-10">
      <Button
        variant={"outline"}
        className="w-fit ml-auto"
        onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
      >
        Sort By{sort === "desc" ? " Newest" : " Oldest"}
      </Button>
      <DataTable columns={columns} data={initialFiles} />
    </div>
  );
}

export default TableWrapper;
