import React, { useState } from "react";
import DashItem from "./DashItem";
import DashItemDraggble from "./DashItemDraggable";
import "./dashboard.scss";

const Dashboard = ({ dashboard, DefaultIdentif }) => {
  const [active, setActive] = useState(DefaultIdentif);
  const handleActive = (newActive) => {
    setActive(newActive);
  };
  return (
    <nav className="dashboard">
      <ul className="dashboard__list">
        {dashboard.map((item, index) =>
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
