import React, { useEffect, useState } from "react";
import ApiCreadores from "./ApiCreadores";

export default function Creadores() {
  const [creadores, setCreadores] = useState([]);

  const getCreadores = async () => {
    const data = await ApiCreadores();
    setCreadores(data.data.results);
  };

  useEffect(() => {
    getCreadores();
  }, []);

  console.log(creadores);

  return (
    <div className="pd-top-80 pd-bottom-50 bg-black" id="grid">
      <div className="container">
        <div className="row">
          {creadores?.map((creador) => {
            return (
              <div className="col-lg-3 col-sm-6" key={creador.id}>
                <div className="single-post-wrap style-overlay">
                  <div className="thumb">
                    <img src={`${creador.thumbnail.path}.${creador.thumbnail.extension}`} alt="img" />
                    <span className="tag-base tag-purple">
                      Ver
                    </span>
                  </div>
                  <div className="details">
                    <div className="post-meta-single">
                      <p>
                        <i className="fa fa-clock-o" />
                        Fecha de modificación: {creador.modified}
                      </p>
                    </div>
                    <h6 className="title">
                      <span>{creador.fullName}</span>
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
