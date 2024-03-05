export interface FileData {
  userId: string;
  fileName: string;
  fullName?: string | null;
  profileImg: string;
  timeStamp: any; // This should be a valid Firestore timestamp, you can use firestore.Timestamp.now() if you're using the Firebase SDK
  type: string;
  size: number;
}

export type FileType = {
  id: string;
  filename: string;
  fullName: string;
  timestamp: Date;
  downloadURL: string;
  type: string;
  size: number;
};

export interface AppState {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (open: boolean) => void;

  isRenameModalOpen: boolean;
  setIsRenameModalOpen: (open: boolean) => void;

  fileId: string | null;
  setFileId: (fileId: string) => void;

  filename: string;
  setFilename: (filename: string) => void;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
