import React from "react";

export default function Comics({ comic }) {
  return (
    <div className="single-post-wrap style-overlay">
      <div className="thumb">
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt="img"
          height={"180px"}
          width={"340px"}
        />
      </div>
      <div className="details">
        <div className="post-meta-single">
          <p>
            <i className="fa fa-clock-o" />
            Fecha de modificación: {comic.modified}
          </p>
        </div>
        <h6 className="title">
          <span>{comic.title}</span>
        </h6>
      </div>
    </div>
  );
}
