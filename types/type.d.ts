export interface FileData {
  userId: string;
  fileName: string;
  fullName?: string | null;
  profileImg: string;
  timeStamp: any; // This should be a valid Firestore timestamp, you can use firestore.Timestamp.now() if you're using the Firebase SDK
  type: string;
  size: number;
}
