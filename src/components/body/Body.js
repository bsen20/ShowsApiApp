import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import "./body.css";
const Body = ({ shows }) => {
  if (shows.length === 0) return <>Sorry No such show found</>;

  return (
    <div className="body">
      {shows.map((show) => (
        // const rating = ;
        <Link className="link" to={`/details/${show.show.id}`}>
          <Card
            image={show.show.image.original}
            name={show.show.name}
            rating={show.show.rating.average}
            bc={
              show.show.rating.average > 7.5
                ? "blue"
                : show.show.rating.average > 5.5
                ? "green"
                : "red"
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default Body;
