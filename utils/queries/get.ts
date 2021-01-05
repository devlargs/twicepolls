import { useState, useEffect } from "react";
import getFirestoreCollection from "utils/auth/getFirestoreCollection";

const get = (collection: string) => {
  const db = getFirestoreCollection(collection);
  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLoading(true);
    db.get()
      .then((snapshot) => {
        const temp = [];
        snapshot.docs.forEach((doc) => {
          temp.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setLists(temp);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return { lists, loading };
};

export { get };
