import React from "react";
import CardPack from "../components/CardPack";
import { useNavigate, useParams } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import banner from "../Assets/banner.png";
import { useUserAuth } from "../components/Context";

const Users = () => {
  let navigate = useNavigate();
  const { user, logOut } = useUserAuth();
  const { id } = useParams();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const goToHome = () => {
    navigate("/");
  };

  const goToCreate = () => {
    navigate(`/Create/${user.uid}`);
  };

  return (
    <div>
      <div className="m-3 p-2">
        <Button
          variant="primary"
          type="button"
          style={{ position: "absolute", top: "10px", left: "10px" }}
          onClick={goToHome}
        >
          Home
        </Button>

        <Button
          variant="danger"
          type="button"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleLogOut}
        >
          Log out
        </Button>
      </div>

      <div
        className="d-flex justify-content-center mh-100"
        style={{ height: 180 }}
      >
        <Image
          className="m-auto h-100"
          src={banner}
          alt="SCT college"
          fluid
          style={{ overflow: "hidden" }}
        />
      </div>
      <CardPack filter={id} userPage={true} />
      <div
        style={{
          position: "sticky",
          bottom: "3em",
          float: "right",
          right: "5em",
          border: "none",
        }}
      >
        <Button
          type="button"
          variant="success"
          onClick={goToCreate}
          className="shadow shadow-10 border"
          style={{ height: "4em", borderRadius: "3em", width: "7em" }}
        >
          <span style={{ fontSize: "25px", textAlign: "center" }}> Create</span>
        </Button>
      </div>
    </div>
  );
};

export default Users;
