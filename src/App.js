import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "./assets/banner1.jpg";
import Banner2 from "./assets/banner2.jpg";
import Banner3 from "./assets/banner3.jpg";

function App() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="First slide"
            style={{ maxHeight: "400px", width: "auto" }}
          />
          <Carousel.Caption>
            <h3>Céu estrelado</h3>
            <p>Aqui temos a imagem de um céu estrelado</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="Third slide"
            style={{ maxHeight: "400px" }}
          />

          <Carousel.Caption>
            <h3>Paisagem por do sol</h3>
            <p>
              Nesse slide nós temos a imagem de uma paisagem com por do sol.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner3}
            alt="Third slide"
            style={{ maxHeight: "400px" }}
          />

          <Carousel.Caption>
            <h3>Balões no céu</h3>
            <p>Nesse último slide temos a imagem de balões no céu.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
