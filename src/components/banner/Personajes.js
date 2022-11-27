import React from "react";
import TarjetaPersonaje from "../tarjetas/TarjetaPersonaje";

export default function Personajes({ personaje }) {
  return (
    <div className="single-post-wrap style-white">
      <div className="thumb">
        <span
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
          <img
            src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
            height={"340px"}
            width={"340px"}
            alt="img"
          />
        </span>

        <div>
          <button
            type="button"
            className="btn btn-primary btn-lg tag-blue"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
            {personaje.name}
          </button>
          <TarjetaPersonaje personaje={personaje} />
        </div>
      </div>
      <div className="details"></div>
    </div>
  );
}
