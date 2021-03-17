import { useEffect, useState } from "react";
import { ProjectFirestore } from "../config";

const UseFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = ProjectFirestore.collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        // foreach ends
        setDocs(document);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default UseFirestore;
