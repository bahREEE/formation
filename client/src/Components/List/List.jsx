import React from "react";
import Trash from "../../assets/svgs/Trash";
import Edit from "../../assets/svgs/Edit";
import "./list.scss";

const List = () => {
  return (
    <table className="list">
      <thead>
        <tr>
          <th>Helo</th>

          <th className="list__action">action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Helmy was here !</td>

          <td className="list__icons">
            <Edit className=" list__icon list__icon--edit" />
            <Trash className=" list__icon list__icon--trash" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
