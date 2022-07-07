import { Button, Nav } from "react-bootstrap";
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useUserAuth } from "./Context";

const Bar = ({ handleClick, filter }) => {
  const { user } = useUserAuth();
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <Button
          variant={filter === "home" ? "primary" : "light"}
          onClick={() => handleClick("home")}
        >
          Home
        </Button>
        <Button
          variant={
            filter === "tUy3IedmJfYQnCBjQNLC60yWDl53" ? "primary" : "light"
          }
          onClick={() => handleClick("tUy3IedmJfYQnCBjQNLC60yWDl53")}
        >
          College
        </Button>
        <Button variant="light"> IEEE </Button>
        <Button variant="light"> NSS </Button>
        <Button variant="light"> IEDC </Button>
        <Button variant="light"> Student Union</Button>
        <Button variant="light">About Us</Button>
        {!user && <Nav.Link href="/Login">Login</Nav.Link>}
        {user && <Nav.Link href={`/Users/${user.uid}`}>My Account</Nav.Link>}
      </Container>
    </Navbar>
  );
};

export default Bar;
