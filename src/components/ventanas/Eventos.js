import React from "react";

export default function Eventos({ evento }) {
  return (
    <div className="single-post-wrap">
      <div className="thumb">
        <img
          src={`${evento.thumbnail.path}.${evento.thumbnail.extension}`}
          alt="img"
          height={"250px"}
          width={"340px"}
        />
      </div>
      <div className="details">
        <div className="post-meta-single mb-4 pt-1">
          <ul>
            <li>
              <span className="tag-base tag-blue">
                Ir al evento
              </span>
            </li>
            <li style={{color: "#808080"}}>
              <i className="fa fa-clock-o" />
              Fecha de modificación: {evento.modified}
            </li>
          </ul>
        </div>
        <h6 className="title"  style={{color: "white"}}>
          <span>{evento.title}</span>
        </h6>
        <p style={{color: "white"}}>{evento.description}</p>
      </div>
    </div>
  );
}
