import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import SingleCard from "../../components/singleCard/SingleCard";
import "./details.css";
const Details = () => {
  const [shows, setShows] = useState({});
  const id = useLocation().pathname.split("/")[2];
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log(res.data);
        setShows(res.data);
      } catch (error) {
        console.log("can not get the data");

        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="details">
      <Sidebar />
      <div className="middle" style={{ flex: 9 }}>
        {shows && (
          <SingleCard
            title={shows.name}
            language={shows.language}
            link={shows.officialSite}
            image={shows.image?.original}
            rating={shows.rating?.average}
            desc={shows?.summary}
            release={shows?.premiered}
          />
        )}
      </div>
    </div>
  );
};

export default Details;
