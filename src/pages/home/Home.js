import React from "react";
import Body from "../../components/body/Body";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
const Home = ({ shows }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="middle" style={{ flex: 9 }}>
        <Body shows={shows} />
      </div>
    </div>
  );
};

export default Home;
