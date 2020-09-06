import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Row, Col, Image, Container, Form, Card, Button } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";

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
  const history = useHistory();
  const [profileData, setProfileData] = useState({});
  const [dataPengajuan, setDataPengajuan] = useState({
    claim_kematians: 'Belum ada Pengajuan',
    claim_kesehatans: 'Belum ada Pengajuan',
    claim_nilai_hidups: 'Belum ada Pengajuan',
    claim_pendidikans: 'Belum ada Pengajuan',
    claim_perumahans: 'Belum ada Pengajuan'
  });
  useEffect(() => {
    if (!localStorage.token) history.push('/');
    getProfileData();
    // eslint-disable-next-line
  }, [history]);
  const claimData = (data) => {
    for (let keys in dataPengajuan) {
      let temp;
      if (data[keys][0]) temp = `Sudah ada pengajuan, status "${data[keys][0]}.status"`;
      setDataPengajuan({
        ...dataPengajuan,
        keys: temp
      })
    }
  }
  const getProfileData = async() => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:3001/users/profile',
        headers: {
          token: localStorage.token
        }
      });
      setProfileData(data);
      claimData(data);
    } catch (err) {
      let msg = "";
      if (err.response) {
        if (Array.isArray(err.response.data.msg)) {
          msg = err.response.data.msg.join("<br>");
        } else {
          msg = err.response.data.msg;
        }
      } else if (err.request) {
        msg = err.request;
      } else {
        msg = err.message;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: `${msg}`,
      });
    }
  }
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 50 }}>User Profile</h1>
      <Container>
        <div style={{ display: "flex", marginBottom: 20 }}>
          <Card style={{ width: "20rem", marginTop: 20 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", marginBottom: 20 }}>Santunan Kematian</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ dataPengajuan.claim_kematians }</Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginTop: 20 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", marginBottom: 20 }}>Santunan Kesehatan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ dataPengajuan.claim_kesehatans }</Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginTop: 20 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", marginBottom: 20 }}>Santunan Nilai Hidup</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ dataPengajuan.claim_nilai_hidups }</Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginTop: 20 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", marginBottom: 20 }}>Santunan Perumahan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ dataPengajuan.claim_perumahans }</Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginTop: 20 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center", marginBottom: 20 }}>Santunan Pendidikan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ dataPengajuan.claim_pendidikans }</Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <Row>
          <Col>
            <div style={{ marginBottom: 20 }}>
              <Image src={require("../assets/image/default-profile.jpg")} roundedCircle />
            </div>
            <Card style={{ width: "20rem", marginTop: 20 }}>
              <Button variant="primary" size="lg" type="submit" block onClick={ () => {
                localStorage.removeItem('token');
                history.push('/');
              } }>
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
                  <Form.Control type="text" name="nama" value={ profileData.nama } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No Induk
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_induk" value={ profileData.no_induk } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" name="email" value={ profileData.email } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Tgl Lahir
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" name="tgl_lahir" value={ profileData.tgl_lahir } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No KTP
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_ktp" value={ profileData.no_ktp } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No BPJS
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_bpjs" value={ profileData.no_bpjs } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Nama Bank
                </Form.Label>
                <Col xs={3}>
                  <Form.Control name="nama_bank" value={ profileData.nama_bank } disabled={true} />
                </Col>
                <Form.Label column sm="1.5">
                  No Rek
                </Form.Label>
                <Col>
                  <Form.Control name="no_rekening" value={ profileData.no_rekening } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Sat. Kerja
                </Form.Label>
                <Col xs={5}>
                  <Form.Control name="satuan_kerja" value={ profileData.satuan_kerja } disabled={true} />
                </Col>
                <Form.Label column sm="1.5">
                  Golongan
                </Form.Label>
                <Col>
                  <Form.Control name="golongan_pangkat" value={ profileData.golongan_pangkat } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No Telp
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="no_telp" value={ profileData.no_telp } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Alamat
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" name="alamat" value={ profileData.alamat } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Kel
                </Form.Label>
                <Col xs={5}>
                  <Form.Control name="kelurahan" value={ profileData.kelurahan } disabled={true} />
                </Col>
                <Form.Label column sm="1.5">
                  Kec
                </Form.Label>
                <Col>
                  <Form.Control name="kecamatan" value={ profileData.kecamatan } disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2"></Form.Label>
                <Col xs={4}>
                  <Form.Control name="kota" value={ profileData.kota } disabled={true} />
                </Col>
                <Col>
                  <Form.Control name="kodepos" value={ profileData.kodepos } disabled={true} />
                </Col>
                <Col>
                  <Form.Control name="provinsi" value={ profileData.provinsi } disabled={true} />
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </motion.div>
  );
};
