import React, { Fragment } from "react";
import Trash from "../../assets/svgs/Trash";
import Edit from "../../assets/svgs/Edit";
import { Link } from "react-router-dom";
import "../Buttons/button.scss";
import "./list.scss";

const List = ({ items, titles, name, handleEdit, handleDelete }) => {
  return (
    <Fragment>
      <Link to="/admin/accounts/ADD" className="btn btn__link">
        {name}
      </Link>
      <table className="list">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <th key={index}>{title.name}</th>
            ))}
            <th className="list__action">action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {titles.map((title, index) => (
                <td key={index}>{item[title.label]}</td>
              ))}
              <td className="list__icons">
                <Edit
                  className=" list__icon list__icon--edit"
                  handleEdit={handleEdit}
                  id={item.id}
                />
                <Trash
                  className=" list__icon list__icon--trash"
                  handleDelete={handleDelete}
                  id={item.id}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;
