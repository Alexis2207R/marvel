import React from "react";

export default function Historias({ historia }) {
  return (
    <div className="details">
      <div className="post-meta-single">
        <ul>
          <li style={{color: "#808080"}}>
            <i className="fa fa-clock-o" />
            Fecha de modificación: {historia.modified}
          </li>
        </ul>
      </div>
      <h6 className="title"  style={{color: "white"}}>
        <span>{historia.title}</span>
      </h6>
    </div>
  );
}
