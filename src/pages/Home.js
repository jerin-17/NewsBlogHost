import React, { useEffect } from "react";
import banner from "../Assets/banner.png";
import Bar from "../components/Bar";
import CardPack from "../components/CardPack";
import Image from "react-bootstrap/Image";
import { useDbContext } from "../components/DbContext";
import { useState } from "react";
function Home() {
  const { getPosts } = useDbContext();
  const [filter, setFilter] = useState("home");
  const handleClick = (uid) => {
    setFilter(uid);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
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
      <Bar handleClick={handleClick} filter={filter} />
      <CardPack filter={filter} userPage={false} />
    </div>
  );
}

export default Home;
