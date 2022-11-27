import React, { useEffect, useState } from "react";
import ApiComics from "./APIS/ApiComics";
import ApiEventos from "./APIS/ApiEventos";
import ApiHistorias from "./APIS/ApiHistorias";
import Comics from "./Comics";
import Eventos from "./Eventos";
import Historias from "./Historias";

export default function Ventanas() {
  const [comics, setComics] = useState([]);

  const getComics = async () => {
    const data = await ApiComics();
    setComics(data.data.results);
  };

  useEffect(() => {
    getComics();
  }, []);

  const [eventos, setEventos] = useState([]);

  const getEventos = async () => {
    const data = await ApiEventos();
    setEventos(data.data.results);
  };

  useEffect(() => {
    getEventos();
  }, []);

  const [historias, setHistorias] = useState([]);

  const getHistorias = async () => {
    const data = await ApiHistorias();
    setHistorias(data.data.results);
  };

  useEffect(() => {
    getHistorias();
  }, []);

  return (
    <div className="post-area pd-top-75 pd-bottom-50 bg-black" id="trending">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="section-title">
              <h6 className="title" style={{color: "white"}}>
                Nuevos <span>Comics</span>
              </h6>
            </div>
            {comics?.map((comic) => {
              return (
                <div className="trending-post" key={comic.id}>
                  <Comics comic={comic} />
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="section-title">
              <h6 className="title" style={{color: "white"}}>
                Nuevos <span>Eventos</span>
              </h6>
            </div>
            {eventos?.map((evento) => {
              return (
                <div key={evento.id}>
                  <Eventos evento={evento} />
                </div>
              );
            })}
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="section-title">
              <h6 className="title"  style={{color: "white"}}>
                Nuevas <span>Historias</span>
              </h6>
            </div>
            {historias?.map((historia) => {
              return (
                <div className="single-post-list-wrap" key={historia.id}>
                  <Historias historia={historia} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
