import React from "react";
import { Link } from "react-router-dom";

const Exercise = props => (
  <tr>
    <td>{props.username}</td>
    <td>{props.description}</td>
    <td>{props.duration}</td>
    <td>{props.date}</td>
    <td>
      <Link to={props.to}>edit</Link> |{" "}
      <button onClick={props.onClick}>delete</button>
    </td>
  </tr>
);

export default Exercise;
