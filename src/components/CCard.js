import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NoImage from "../Assets/no-image-icon-11.png";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const CCard = ({ id, title, image, userPage }) => {
  const docref = doc(db, "posts/", id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/News/${id}`);
  };
  const handleDelete = async () => {
    await deleteDoc(docref);
  };
  return (
    <Card>
      <Card.Img variant="top" src={image ? image : NoImage} alt="post" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        {userPage && (
          <Button
            variant="danger"
            style={{ float: "right" }}
            size="sm"
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
        {!userPage && (
          <Button
            variant="outline-primary"
            size="sm"
            style={{ float: "right" }}
            onClick={handleClick}
          >
            read more
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default CCard;
