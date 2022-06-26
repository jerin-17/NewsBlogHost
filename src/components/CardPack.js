import React from "react";
import CCard from "./CCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDbContext } from "./DbContext";

const CardPack = () => {
  const { postLists } = useDbContext();
  return (
    <>
      <Row xs={1} md={4} className="g-4 m-4 ">
        {postLists.map((post) => {
          return (
            <Col key={post.id}>
              <CCard
                id={post.id}
                title={post.title}
                image={post.imageUrl}
                desc={post.desc}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CardPack;
