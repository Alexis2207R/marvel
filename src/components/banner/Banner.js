import React, { useEffect, useState } from "react";
import Personajes from "./Personajes";
import ApiPersonajeDest from "./ApiPersonajeDest";
import Api from "./Api";
import TarjetaPersonaje from "../tarjetas/TarjetaPersonaje";

export default function Banner() {
  const [personajedest, setPersonajeDest] = useState([]);

  const getPersonajeDest = async () => {
    const data = await ApiPersonajeDest();
    setPersonajeDest(data.data.results);
  };

  useEffect(() => {
    getPersonajeDest();
  }, []);

  const [personajes, setPersonajes] = useState([]);

  const getPersonajes = async () => {
    const data = await Api();
    setPersonajes(data.data.results);
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  // var personajes = [];

  // for (let index = 0; index < 4; index++) {
  //   const [personaje, setPersonaje] = useState([]);

  //   const getPersonaje = async () => {
  //     const data = await Api();
  //     setPersonaje(data.data.results);
  //   };

  //   useEffect(() => {
  //     getPersonaje();
  //   }, []);

  //   personajes.push(personaje);
  // }

  // console.log(personajes);

  return (
    <div className="banner-area banner-inner-1 bg-black" id="banner">
      <div className="banner-inner pt-5">
        {personajedest?.map((perdest) => {
          return (
            <div className="container" key={perdest.id}>
              <div className="row">
                <div className="col-lg-4">
                  <div className="thumb after-left-top">
                    <img
                      src={`${perdest.thumbnail.path}.${perdest.thumbnail.extension}`}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="banner-details mt-4 mt-lg-0">
                    <div className="post-meta-single">
                      <ul>
                        <li>
                          <h5 className="tag-base tag-blue">
                            Personaje destacado
                          </h5>
                        </li>
                        <li className="date">
                          <i className="fa fa-clock-o" />
                          Fecha de modificación: {perdest.modified}
                        </li>
                      </ul>
                    </div>
                    <h2>{perdest.name}</h2>
                    <p>{perdest.description}</p>
                    <span className="btn btn-primary">
                      Ver más
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="card col-lg-3 single-post-wrap style-white">
          <div className="card-body">
            <h4 className="card-title">Personajes</h4>
          </div>
        </div>
        <div className="single-post-wrap style-white">
          <span className="btn btn-dark">
            Ver Todos
          </span>
        </div>
        <div className="row">
          {personajes?.map((personaje) => {
            return (
              <div className="col-lg-3 col-sm-6" key={personaje.id}>
                <Personajes personaje={personaje} />;
                <TarjetaPersonaje personaje={personaje} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
