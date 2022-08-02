import React, { useEffect } from "react";
import banner from "../Assets/banner.png";
import Bar from "../components/Bar";
import Dropdwn from "../components/Dropdwn";
import CardPack from "../components/CardPack";
import Image from "react-bootstrap/Image";
import { useDbContext } from "../components/DbContext";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
function Home() {
  const { getPosts } = useDbContext();
  const [filter, setFilter] = useState("home");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
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
      {isDesktopOrLaptop && <Bar handleClick={handleClick} filter={filter} />}
      {isMobile && <Dropdwn handleClick={handleClick} filter={filter} />}
      <CardPack filter={filter} userPage={false} />
    </div>
  );
}

export default Home;
