import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const CardPack = () => {
  const [postLists, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {postLists.map((post) => {
        return (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.imageUrl}
            desc={post.desc}
          />
        );
      })}
    </>
  );
};

export default CardPack;
