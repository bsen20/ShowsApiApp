import React from "react";
import "./sidebar.css";
import SidebarItems from "./SidebarItems";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="link" to="/">
        <div className="items">
          <HomeOutlinedIcon />
          <SidebarItems title="Home" />
        </div>
      </Link>
      <div className="items special">
        <ChatBubbleOutlineIcon />
        <SidebarItems title="Contact" />
      </div>
      <div className="items">
        <LocalFireDepartmentOutlinedIcon />
        <SidebarItems title="Trending" />
      </div>
      <div className="items">
        <FavoriteBorderOutlinedIcon />
        <SidebarItems title="Favourites" />
      </div>
    </div>
  );
};

export default Sidebar;
