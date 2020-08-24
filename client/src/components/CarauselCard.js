import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Banner from "../assets/landingpage/banner.jpg";
import Banner2 from "../assets/image/banner2.jpg";
import Banner3 from "../assets/image/banner3.jpg";

export default () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: 50, marginBottom: 20 }}>
        <p style={{ fontWeight: "bolder", fontSize: 40 }}>Berita</p>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Carousel indicators={false} interval={2000}>
              <Carousel.Item>
                <h4 style={{ fontWeight: "bold", color: "black" }}>Yayasan Jati Sejahtera (YKP3JS) Silaturahmi Di Jawa Barat</h4>
                <h6 style={{ color: "black" }}>Yayasan jati sejahtera (YKP3JS) mengadakan kegiatan Silaturahmi bersama // perwakilan yayasan jati sejahtera di jawa barat</h6>
                {/* </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <h4 style={{ fontWeight: "bold", color: "black" }}>Sosialisasi Pensiunan Perhutani Jawa Tengah Semarang</h4>
                <h6 style={{ color: "black" }}>Pensiunan perhutani jawa tengah semarang melakukan sosialisasi mengenai // biaya bantuan rawat inap dan santunan kematian bagi pensiunan Perhutani.</h6>
              </Carousel.Item>
              <Carousel.Item>
                <h4 style={{ fontWeight: "bold", color: "black" }}>Yayasan Jati Sejahtera (YKP3JS) Silaturahmi Di Jawa Barat</h4>
                <h6 style={{ color: "black" }}>Jati Sejahtera (YKP3 JATI SEJAHTERA)</h6>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
};
