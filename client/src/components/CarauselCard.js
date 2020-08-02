import React from "react";
import { Carousel } from "react-bootstrap";
import Banner from "../assets/image/banner.jpeg";

export default () => {
  return (
    <Carousel indicators={false} interval={2000}>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
