import React from "react";
import CCard from "./CCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDbContext } from "./DbContext";

const CardPack = ({ filter, userPage }) => {
  const { postLists } = useDbContext();
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
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default CardPack;
