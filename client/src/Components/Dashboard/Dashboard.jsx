import React, { useState } from "react";
import DashItem from "./DashItem";
import DashItemDraggble from "./DashItemDraggable";
import {
  adminDefaultIdentif,
  adminDash,
} from "../../Constant/Dashboards/adminDashboard";
import "./dashboard.scss";

const Dashboard = () => {
  const [active, setActive] = useState(adminDefaultIdentif);
  const handleActive = (newActive) => {
    setActive(newActive);
  };
  return (
    <nav className="dashboard">
      <ul className="dashboard__list">
        {adminDash.map((item, index) =>
          item.subList ? (
            <DashItemDraggble
              key={index}
              item={item}
              active={active}
              handleActive={handleActive}
            />
          ) : (
            <DashItem
              key={index}
              item={item}
              active={active === item.identif}
              handleActive={handleActive}
            />
          )
        )}
      </ul>
    </nav>
  );
};

export default Dashboard;
