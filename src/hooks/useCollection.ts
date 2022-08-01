import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  QueryConstraint,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const useCollection = <T>(
  path: string,
  constraints: QueryConstraint[] = []
) => {
  const [docs, setDocs] = useState<T[]>([]);

  const add = (doc: T) => {
    addDoc(collection(db, path), doc);
  };

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, path), ...constraints),
      (querySnapshot) => {
        const docs: T[] = [];
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() } as unknown as T);
        });
        setDocs(docs);
      }
    );
    return unsub;
  }, []);

  return { docs, add };
};

export default useCollection;
