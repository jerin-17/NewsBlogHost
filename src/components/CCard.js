import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NoImage from "../Assets/no-image-icon-11.png";
// eslint-disable-next-line no-unused-vars
const CCard = ({ id, title, image, desc }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/News/${id}`);
  };
  return (
    <Card>
      <Card.Img variant="top" src={image ? image : NoImage} alt="post" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="outline-primary"
          size="sm"
          style={{ float: "right" }}
          onClick={handleClick}
        >
          read more
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CCard;
