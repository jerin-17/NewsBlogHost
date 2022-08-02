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
        <Button
          variant={
            filter === "NLcqNTcLhpVFXXNioiXJMM10dSq2" ? "primary" : "light"
          }
          onClick={() => handleClick("NLcqNTcLhpVFXXNioiXJMM10dSq2")}
        >
          {" "}
          IEEE{" "}
        </Button>
        <Button
          variant={
            filter === "apWNdPOC4GXHrQ4dzE7qBzWHvOo2" ? "primary" : "light"
          }
          onClick={() => handleClick("apWNdPOC4GXHrQ4dzE7qBzWHvOo2")}
        >
          {" "}
          NSS{" "}
        </Button>
        <Button
          variant={
            filter === "DlE9407dAqYiUmPEa0myFeh9Bdh1" ? "primary" : "light"
          }
          onClick={() => handleClick("DlE9407dAqYiUmPEa0myFeh9Bdh1")}
        >
          {" "}
          IEDC{" "}
        </Button>
        <Button
          variant={
            filter == "7YNcGcpm9WUXzsnicgm9uQtak7o1" ? "primary" : "light"
          }
          onClick={() => handleClick("7YNcGcpm9WUXzsnicgm9uQtak7o1")}
        >
          {" "}
          Student Union
        </Button>
        {!user && <Nav.Link href="/Login">Login</Nav.Link>}
        {user && <Nav.Link href={`/Users/${user.uid}`}>My Account</Nav.Link>}
      </Container>
    </Navbar>
  );
};

export default Bar;
