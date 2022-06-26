import React from "react";
import { createContext, useContext, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

const dbContext = createContext();

export function DbContextProvider({ children }) {
  const [postLists, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <dbContext.Provider value={{ postLists, getPosts }}>
      {children}
    </dbContext.Provider>
  );
}

export function useDbContext() {
  return useContext(dbContext);
}
