import { FieldValue } from "firebase/firestore";

export interface Message {
  id?: string;
  uid: string;
  text: string;
  photoURL: string | null;
  displayName: string | null;
  createdAt: FieldValue;
}
