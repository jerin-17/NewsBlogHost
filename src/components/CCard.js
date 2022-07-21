import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NoImage from "../Assets/no-image-icon-11.png";

const CCard = ({ id, title, image, userPage, handleDelete }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image ? image : NoImage} alt="post" />
      <Card.Body>
        <Card.Title>
          <Link
            to={`/News/${id}`}
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
            }}
            onMouseOver={({ target }) => {
              target.style.color = "blue";
            }}
            onMouseOut={({ target }) => (target.style.color = "#000")}
          >
            {title}
          </Link>
        </Card.Title>
      </Card.Body>
      {userPage && (
        <Card.Footer>
          <Button
            variant="danger"
            style={{ float: "right" }}
            size="sm"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CCard;
