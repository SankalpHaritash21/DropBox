"use client";
import React from "react";
import DropzoneComponent from "react-dropzone";
import { cn } from "@/lib/utils";

const Dropzone = () => {
  // file max fize
  const maxSize = 12582912;
  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("File Reading was Aborted");
      reader.onerror = () => console.log("File reading has failed");
      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadPost = (selectedFile: File) => {
    return <div></div>;
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
