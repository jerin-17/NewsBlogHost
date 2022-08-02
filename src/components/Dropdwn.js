import React from "react";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Dropdwn = ({ handleClick, filter }) => {
  const idname = {
    home: "home",
    tUy3IedmJfYQnCBjQNLC60yWDl53: "College",
    NLcqNTcLhpVFXXNioiXJMM10dSq2: "IEEE",
    apWNdPOC4GXHrQ4dzE7qBzWHvOo2: "NSS",
    DlE9407dAqYiUmPEa0myFeh9Bdh1: "IEDC",
    "7YNcGcpm9WUXzsnicgm9uQtak7o1": "Student Union",
  };
  return (
    <Container>
      <DropdownButton title={idname[filter]} className="pl-2 ml-3">
        <Dropdown.Item onClick={() => handleClick("home")}>Home</Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("tUy3IedmJfYQnCBjQNLC60yWDl53")}
        >
          College
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("NLcqNTcLhpVFXXNioiXJMM10dSq2")}
        >
          IEEE
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("apWNdPOC4GXHrQ4dzE7qBzWHvOo2")}
        >
          NSS
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("DlE9407dAqYiUmPEa0myFeh9Bdh1")}
        >
          IEDC
        </Dropdown.Item>

        <Dropdown.Item
          onClick={() => handleClick("7YNcGcpm9WUXzsnicgm9uQtak7o1")}
        >
          Student Union
        </Dropdown.Item>
      </DropdownButton>
    </Container>
  );
};

export default Dropdwn;
