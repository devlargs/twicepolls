import { useEffect, useState } from "react";
import { Flex, useBreakpointValue, Spinner } from "@chakra-ui/react";
import ListBox from "components/ListBox";
import initFirebase from "utils/auth/initFirebase";
import firebase from "firebase/app";
import keyBy from "utils/lodash/keyBy";

initFirebase();

const db = firebase.firestore();
const polls = db.collection("polls");

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const h = "auto";
  const m = 4;
  const p = 5;
  const w = useBreakpointValue({
    xl: "auto",
    lg: "auto",
    md: "auto",
    sm: "100%",
    base: "100%",
  });

  // useEffect(() => {
  // polls.onSnapshot((snapshot) => {
  //   let changes = snapshot.docChanges();
  //   changes.forEach(({ type, doc }) => {
  //     if (type === "added") {
  //       const ids = Object.keys(keyBy(lists, "id"));
  //       if (!ids.includes(doc.id)) {
  //         const temp = [...lists];
  //         temp.push({
  //           ...doc.data(),
  //           id: doc.id,
  //         });
  //         setLists(temp);
  //       }
  //     }
  //   });
  // });
  // }, [lists]);

  useEffect(() => {
    setLoading(true);
    polls
      .get()
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

  return (
    <>
      <Flex wrap="wrap" justifyContent="center" p={5}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {lists.map((q) => {
              return (
                <ListBox key={q.id} w={w} h={h} text={q.question} m={m} p={p} />
              );
            })}
          </>
        )}
      </Flex>
    </>
  );
};

export default Lists;
