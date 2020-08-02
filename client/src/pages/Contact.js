import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Col, Form, Row, Button } from "react-bootstrap";

export default () => {
  return (
    <>
      <Navigation />
      <Container>
        <p style={{ fontWeight: "bold", textAlign: "center", fontSize: 50 }}>Hubungi Kami</p>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Nama
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Nama" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Alamat
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" rows="3" placeholder="Alamat" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Telpon
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Telpon" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Kirim</Button>
            </Col>
          </Form.Group>
        </Form>
        <div style={{ marginTop: 50, marginBottom: 20 }}>
          <Row>
            <Col>
              <p style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>KANTOR PUSAT</p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>WISMA PERHUTANI</p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>
                JALAN VILLA NO.1 GATOT SOBROTO KAV. 17 – 18 JAKARTA SELATAN
              </p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>
                TLP. 62.21.5252983, FAC. 62.21.5252983
              </p>
              <p>Email : yayasanjatisejahtera@yahoo.co.id</p>
            </Col>
          </Row>
        </div>
        <div style={{ marginBottom: 50 }}>
          <Row>
            <Col>
              <p style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
                KANTOR PERWAKILAN YKP3.JS JAWA BARAT
              </p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>KANTOR PERHUTANI</p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>
                JL.SOEKARNO HATTA NO. 628 KM.14 BANDUNG 40292.
              </p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>TLP. 62.22. 7802792 </p>
            </Col>
            <Col>
              <p style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
                KANTOR PERWAKILAN YKP3.JS JAWA TENGAH
              </p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>KANTOR PERHUTANI</p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>
                JL.PAHLAWAN NO. 15 - 17 SEMARANG 50243
              </p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>TLP. 62.24 8413631</p>
            </Col>
            <Col>
              <p style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
                KANTOR PERWAKILAN YKP3.JS JAWA TIMUR
              </p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>KANTOR PERHUTANI</p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>
                JL.GENTENG KALI NO. 49 SURABAYA 60008.
              </p>
              <p style={{ marginBottom: 0, fontSize: 13 }}>TLP. 62.31 5343881</p>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};
