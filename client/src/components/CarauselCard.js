import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../assets/image/banner1.jpg";
import Banner2 from "../assets/image/banner2.jpg";
import Banner3 from "../assets/image/banner3.jpg";

export default () => {
  return (
    <Carousel indicators={false} interval={2000}>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <h1>Yayasan Kesejahteraan Pegawai Perum Perhutani</h1>
          <h3 style={{ fontWeight: "bold" }}>Jati Sejahtera (YKP3 JATI SEJAHTERA)</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
