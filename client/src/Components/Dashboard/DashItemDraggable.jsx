import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../assets/svgs/Arrow";

const DashItemDraggble = ({ active, item, handleActive }) => {
  const [drag, setDrag] = useState(false);

  const ArrowStyle = () => {
    return drag
      ? {
          color: "var(--main-color)",
          transform: "rotate(0deg)",
        }
      : null;
  };

  const listStyle = () => {
    if (drag || item.subList.some((option) => option.identif === active)) {
      return {
        color: "var(--main-color)",
      };
    }
  };

  const itemStyle = () => {
    return {
      maxHeight: `${drag ? "100px" : "0px"}`,
      display: !drag && "none",
    };
  };
  return (
    <div to="/admin" className="dashboard__draggable">
      <div
        className="dashboard__draggable--list"
        onClick={() => setDrag(!drag)}
        style={listStyle()}
      >
        <item.Icon className={`dashboard__icon`} />
        <span className="dashboard__link">{item.name}</span>
        <Arrow className="dashboard__arrow" style={ArrowStyle()} />
      </div>
      <ul className="dashboard__draggable--items" style={itemStyle()}>
        {item.subList.map((option, index) => (
          <NavLink
            key={index}
            onClick={() => handleActive(option.identif)}
            to={option.url}
            className={`dashboard__draggable--item ${
              active === option.identif && "dashboard__draggable--item--active"
            }`}
          >
            {option.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default DashItemDraggble;
