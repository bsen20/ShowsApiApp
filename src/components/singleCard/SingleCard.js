import React from "react";
import "./singleCard.css";
import StarIcon from "@mui/icons-material/Star";

import parse from "html-react-parser";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SingleCard = ({
  image,
  title,
  language,
  release,
  desc,
  rating,
  link,
}) => {
  return (
    <div className="singleCard">
      <div className="leftImage">
        <img src={image} alt="" />
      </div>
      <div className="rightSection">
        <h2>{title}</h2>
        <div className="smallDetail">
          <p>
            <b>Language : </b>
            {language}
          </p>
          <p>
            <b>Release : </b>
            {release}
          </p>
        </div>
        <p className="description">{parse("" + desc)}</p>
        <div className="singleCardRating">
          <div className="ratingIcon">
            Rating {rating ? rating : "5.5"}{" "}
            <StarIcon style={{ color: "yellow" }} />
          </div>
          <a href={link} className="officialSite">
            Official Site
            <ChevronRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
