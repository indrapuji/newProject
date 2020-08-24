import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

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
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Update Data</p>
        </div>
        <div style={{ marginBottom: 50 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 20 }}>Data Diri</h3>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Nama" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nomor Induk
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="NIP / NPP / NIK" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Alamat Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="Alamat Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No KTP" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No BPJS" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank
              </Form.Label>
              <Col xs={3}>
                <Form.Control placeholder="Nama Bank" />
              </Col>
              <Col>
                <Form.Control placeholder="No Rekening" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Satuan Kerja
              </Form.Label>
              <Col xs={5}>
                <Form.Control placeholder="Satuan Kerja Saat Pensiun" />
              </Col>
              <Col>
                <Form.Control placeholder="Golongan Pangkat Saat Pensiun" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Rumah
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No Telp Rumah" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Alamat
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Alamat" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2"></Form.Label>
              <Col xs={5}>
                <Form.Control placeholder="Kelurahan / Desa" />
              </Col>
              <Col>
                <Form.Control placeholder="Kecamatan" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2"></Form.Label>
              <Col xs={4}>
                <Form.Control placeholder="Kota / Kabupaten" />
              </Col>
              <Col>
                <Form.Control placeholder="Kodepos" />
              </Col>
              <Col>
                <Form.Control placeholder="Provinsi" />
              </Col>
            </Form.Group>
            <h3 style={{ fontWeight: "bold", marginBottom: 20, marginTop: 40 }}>Data Pendukung 1</h3>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Nama" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No Telp Rumah" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No KTP" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No BPJS" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank Istri / Suami
              </Form.Label>
              <Col xs={3}>
                <Form.Control placeholder="Nama Bank" />
              </Col>
              <Col>
                <Form.Control placeholder="No Rekening" />
              </Col>
            </Form.Group>
            <h3 style={{ fontWeight: "bold", marginBottom: 20, marginTop: 40 }}>Data Pendukung 2</h3>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Nama" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No Telp Rumah" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No KTP" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No BPJS" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank Anak
              </Form.Label>
              <Col xs={3}>
                <Form.Control placeholder="Nama Bank" />
              </Col>
              <Col>
                <Form.Control placeholder="No Rekening" />
              </Col>
            </Form.Group>
            <Button variant="primary" size="lg" type="submit" block>
              Kirim
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
