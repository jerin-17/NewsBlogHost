import React from "react";
import { useParams } from "react-router-dom";
import { useDbContext } from "../components/DbContext";
import { Image } from "react-bootstrap";
import NoImage from "../Assets/no-image-icon-11.png";

const News = () => {
  const { postLists } = useDbContext();
  const { docid } = useParams();
  const postDet = postLists.find((card) => card.id === docid);

  return (
    <>
      <div>
        <h1>{postDet.title}</h1>
        <Image
          src={postDet.imageUrl ? postDet.imageUrl : NoImage}
          style={{ height: "30%", width: "50%" }}
        />
        <p>{postDet.desc}</p>
      </div>
    </>
  );
};

export default News;
