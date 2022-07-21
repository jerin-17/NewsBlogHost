import React from "react";
import CCard from "./CCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useDbContext } from "./DbContext";

const CardPack = ({ filter, userPage }) => {
  const { postLists, setPostList } = useDbContext();
  const handleDelete = async (id) => {
    const docref = doc(db, "posts/", id);
    await deleteDoc(docref);
    setPostList((postLists) => {
      return postLists.filter((post) => {
        return post.id !== id;
      });
    });
  };
  return (
    <>
      <Row xs={1} md={4} className="g-4 m-4 ">
        {postLists
          .filter((post) => {
            if (filter === "home") return true;
            return post.author === filter;
          })
          .map((post) => {
            return (
              <Col key={post.id}>
                <CCard
                  id={post.id}
                  title={post.title}
                  image={post.imageUrl}
                  desc={post.desc}
                  userPage={userPage}
                  handleDelete={handleDelete}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default CardPack;
