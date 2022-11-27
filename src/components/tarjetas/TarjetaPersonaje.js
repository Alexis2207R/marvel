// import React, {useState, useEffect} from "react";
import React from "react";

export default function TarjetaPersonaje({ personaje }) {

  // var id = idpersonaje.id;
  // const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=13/11/2022, 04:17:35&apikey=f688834bc1e1392c1b176ae13a11dd0f&hash=3ea7b8c8dfa269b8a6bf1fcbe521a021`;
  // const ApiPer = async () => {
  //   const response = await fetch( url );
  //   const data = await response.json();
  //   return data;
  // };
  // console.log(id);

  // const [per, setPer] = useState([]);

  // const getPer = async () => {
  //   const data = await ApiPer();
  //   setPer(data.data.results);
  // };

  // useEffect(() => {
  //   getPer();
  // }, []);

  // console.log(per);

  return (
    <div
      className="modal fade"
      id="modalId"
      tabIndex={-1}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitleId">
              {personaje.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="single-post-wrap">
              <div className="thumb">
                <img
                  src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                  alt="img"
                  height={"250px"}
                  width={"340px"}
                />
              </div>
              <div className="details">
                <div className="post-meta-single mb-4 pt-1">
                  <ul>
                    <li>
                      <i className="fa fa-clock-o" />
                      Fecha de modificación: {personaje.modified}
                    </li>
                  </ul>
                </div>
                <h6 className="title">
                  <span>{personaje.name}</span>
                </h6>
                <p>{personaje.description}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
