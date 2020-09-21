import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaGem } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";

function App() {
  return (
    <div className="App">
      <ProSidebar breakPoint="xl" image="https://theimageconference.org/wp-content/uploads/2020/04/vancouver_image_conference_3-scaled.jpg">
        <Menu iconShape="circle">
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <MenuItem icon={<FaHeart />}>Dashboard</MenuItem>
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
          <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default App;
