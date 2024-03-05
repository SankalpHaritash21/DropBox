"use client";
import React, { useState } from "react";
import DropzoneComponent from "react-dropzone";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/firebase";
import { FileData, FileType } from "@/types/type";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Dropzone = () => {
  const [loading, setLoading] = useState(false);
  const { isLoaded, user, isSignedIn } = useUser();
  // file max fize
  const maxSize = 12582912;
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      // Check if the file is a video
      if (file.type.startsWith("video/")) {
        console.log("File is a movie, rejecting");
      }

      const reader = new FileReader();
      reader.onabort = () => console.log("File Reading was Aborted");
      reader.onerror = () => console.log("File reading has failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = async (selectedFile: File) => {
    if (loading) return;
    if (!user) return;

    setLoading(true);

    //add fire base

    try {
      const docRef = await addDoc(collection(db, "users", user.id, "files"), {
        userId: user.id,
        fileName: selectedFile.name,
        fullName: user.fullName,
        profileImg: user.imageUrl,
        timeStamp: serverTimestamp(),
        type: selectedFile.type,
        size: selectedFile.size,
      });
      console.log("Document written with ID: ", docRef);
      console.log(selectedFile);
      const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

      //upload file in FireBase
      uploadBytes(imageRef, selectedFile).then(async (snapShot) => {
        const downloadUrl = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
          downloadUrl: downloadUrl,
        });
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setLoading(false);
  };

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return (
          <section className="m-4 border-black dark:border-white  border-2 border-dotted rounded-lg">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg",
                isDragActive
                  ? "bg-blue-950"
                  : "bg-slate bg-gray-500 dark:bg-slate-800 text-black dark:text-slate-100 hover:underline cursor-pointer"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or drag files to drop"}
              {isDragActive && !isDragReject && "Drop to upload this file"}
              {isDragReject && "File type not accepted !!"}
              {isFileTooLarge && <div> File is Too Lagre</div>}
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
};

export default Dropzone;
