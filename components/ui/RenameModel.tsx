"use client";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { doc, updateDoc } from "firebase/firestore";

import toast from "react-hot-toast";
import { db } from "@/firebase";

const RenameModal = () => {
  const [input, setInput] = useState("");
  const { user } = useUser();

  const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
    useAppStore((state: any) => [
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
      state.fileId,
      state.filename,
    ]);

  const renameFile = async () => {
    if (!user || !fileId) return;
    const toastId = toast.loading("Renaming....");
    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });
    toast.success("Renamed Successfully", {
      id: toastId,
    });
    setInput("");
    setIsRenameModalOpen(false);
  };
  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={() => {
        setIsRenameModalOpen(false);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename the Files</DialogTitle>

          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />

          <Button
            size="sm"
            className="px-3"
            variant={"ghost"}
            onClick={() => setIsRenameModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={() => renameFile()}
          >
            <span className="sr-only">Rename</span>
            <span>Rename</span>
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
