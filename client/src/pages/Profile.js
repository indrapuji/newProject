import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Image, Container, Form, Card, Button } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default () => {
  const pageTransition = {
    init: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 50 }}>User Profile</h1>
      <Container>
        <Row>
          <Col>
            <div style={{ marginBottom: 20 }}>
              <Image src={require("../assets/image/default-profile.jpg")} roundedCircle />
            </div>
            <Card style={{ width: "20rem", marginTop: 20 }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center", marginBottom: 20 }}>Santunan Pendidikan</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sudah Pengajuan</Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem", marginTop: 20 }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center", marginBottom: 20 }}>Santunan Pendidikan</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sudah Pengajuan</Card.Subtitle>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem", marginTop: 20 }}>
              <Button variant="primary" size="lg" type="submit" block>
                Logout
              </Button>
            </Card>
          </Col>
          <Col xs="auto">
            <Form style={{ marginBottom: 20 }}>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Nama
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="nama" value="Indra Puji Novirwan" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No Induk
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_induk" value="12345" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" name="email" value="indra@mail.com" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Tgl Lahir
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" name="tgl_lahir" value="10-Nov-2000" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No KTP
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_ktp" value="1234567" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No BPJS
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_bpjs" value="1234567" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Nama Bank
                </Form.Label>
                <Col xs={3}>
                  <Form.Control name="nama_bank" value="BCA" disabled={true} />
                </Col>
                <Form.Label column sm="1.5">
                  No Rek
                </Form.Label>
                <Col>
                  <Form.Control name="no_rekening" value="123456789" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Sat. Kerja
                </Form.Label>
                <Col xs={5}>
                  <Form.Control name="satuan_kerja" value="Pensiun" disabled={true} />
                </Col>
                <Form.Label column sm="1.5">
                  Golongan
                </Form.Label>
                <Col>
                  <Form.Control name="golongan_pangkat" value="Pensiun" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No Telp
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_telp" value="123456789" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Alamat
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="alamat" value="123456789" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Kel
                </Form.Label>
                <Col xs={5}>
                  <Form.Control name="satuan_kerja" value="Pensiun" disabled={true} />
                </Col>
                <Form.Label column sm="1.5">
                  Kec
                </Form.Label>
                <Col>
                  <Form.Control name="golongan_pangkat" value="Pensiun" disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2"></Form.Label>
                <Col xs={4}>
                  <Form.Control name="kota" value="Jakarta" disabled={true} />
                </Col>
                <Col>
                  <Form.Control name="kodepos" value="10550" disabled={true} />
                </Col>
                <Col>
                  <Form.Control name="provinsi" value="DKI JAKARTA" disabled={true} />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};
