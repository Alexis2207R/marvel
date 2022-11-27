import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer-area bg-black pd-top-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="widget">
                <h5 className="widget-title">Informacion de la página</h5>
                <div className="widget_about">
                  <p>
                    MARVEL es una editorial de cómics conocida por crear notables
                    superhéroes como Spider-Man, Iron Man, Capitán América,
                    Hulk, Thor, los Vengadores, los Guardianes de la Galaxia,
                    los X-Men, los Cuatro Fantásticos y Deadpool. Los villanos
                    más conocidos de Marvel son el Duende Verde, Cráneo Rojo,
                    Loki, Thanos, Ultrón, Doctor Doom y Magneto. Marvel Comics y
                    DC Comics han colaborado en varios proyectos de crossover
                    juntos y también cofundaron el intencionadamente efímero
                    sello Amalgam Comics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="widget widget_recent_post">
                <h5 className="widget-title">Programadores</h5>
                <div className="single-post-list-wrap style-white">
                  <div className="media">
                    <div className="media-left">
                      <img
                        src="assets/img/programadores/alexis.jpg"
                        alt="img"
                      />
                    </div>
                    <div className="media-body">
                      <div className="details">
                        <div className="post-meta-single">
                          <ul>
                            <li>
                              <i className="fa fa-clock-o" />
                              27.11.2022
                            </li>
                          </ul>
                        </div>
                        <h6 className="title">Ruiz Sandoval Gerardo Alexis</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-post-list-wrap style-white">
                  <div className="media">
                    <div className="media-left">
                      <img src="assets/img/programadores/cayao.jpg" alt="img" />
                    </div>
                    <div className="media-body">
                      <div className="details">
                        <div className="post-meta-single">
                          <ul>
                            <li>
                              <i className="fa fa-clock-o" />
                              27.11.2022
                            </li>
                          </ul>
                        </div>
                        <h6 className="title">
                          <span>Cayao Perez Daniel Antoni</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-post-list-wrap style-white">
                  <div className="media">
                    <div className="media-left">
                      <img src="assets/img/programadores/bryan.jpg" alt="img" />
                    </div>
                    <div className="media-body">
                      <div className="details">
                        <div className="post-meta-single">
                          <ul>
                            <li>
                              <i className="fa fa-clock-o" />
                              27.11.2022
                            </li>
                          </ul>
                        </div>
                        <h6 className="title">
                          <span>Bautista Ramos Bryan</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top">
        <span className="back-top">
          <i className="fa fa-angle-up" />
        </span>
      </div>
    </div>
  );
}
