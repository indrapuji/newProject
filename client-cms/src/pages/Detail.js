import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import host from '../hooks/host'

export default () => {
  // const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";
  // const host = "http://128.199.238.147:3001";

  const { dataId } = useParams();
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

  useEffect(() => {
    fetchApi();
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${host}/users/daftar-anggota/${dataId}`,
      headers: {
        token: localStorage.token,
      },
    });
    setData(data);
    setLoading(false);
  };

  function handdleCancel() {
    history.push("/");
  }

  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      {/* {JSON.stringify(data)} */}
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
          <Spinner animation="border" variant="success" />
        </div>
      ) : (
        <Container>
          <div style={{ marginTop: 50 }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Detail</p>
          </div>
          <div style={{ marginBottom: 50 }}>
            <h3 style={{ fontWeight: "bold", marginBottom: 20 }}>Data Diri</h3>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Nama
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Nama" name="nama" value={data.nama} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Nomor Induk
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="NIP / NPP / NIK" name="no_induk" value={data.no_induk} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Alamat Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="Alamat Email" name="email" value={data.email} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Tanggal Lahir
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" name="tgl_lahir" value={data.tgl_lahir} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No KTP
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No KTP" name="no_ktp" value={data.no_ktp} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No BPJS
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No BPJS" name="no_bpjs" value={data.no_bpjs} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Data Bank
                </Form.Label>
                <Col xs={3}>
                  <Form.Control placeholder="Nama Bank" name="nama_bank" value={data.nama_bank} disabled={true} />
                </Col>
                <Col>
                  <Form.Control placeholder="No Rekening" name="no_rekening" value={data.no_rekening} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Satuan Kerja
                </Form.Label>
                <Col xs={5}>
                  <Form.Control placeholder="Satuan Kerja Saat Pensiun" name="satuan_kerja" value={data.satuan_kerja} disabled={true} />
                </Col>
                <Col>
                  <Form.Control placeholder="Golongan Pangkat Saat Pensiun" name="golongan_pangkat" value={data.golongan_pangkat} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No Telp Rumah
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No Telp Rumah" name="no_telp" value={data.no_telp} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Alamat
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Alamat" name="alamat" value={data.alamat} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2"></Form.Label>
                <Col xs={5}>
                  <Form.Control placeholder="Kelurahan / Desa" name="kelurahan" value={data.kelurahan} disabled={true} />
                </Col>
                <Col>
                  <Form.Control placeholder="Kecamatan" name="kecamatan" value={data.kecamatan} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2"></Form.Label>
                <Col xs={4}>
                  <Form.Control placeholder="Kota / Kabupaten" name="kota" value={data.kota} disabled={true} />
                </Col>
                <Col>
                  <Form.Control placeholder="Kodepos" name="kodepos" value={data.kodepos} disabled={true} />
                </Col>
                <Col>
                  <Form.Control placeholder="Provinsi" name="provinsi" value={data.provinsi} disabled={true} />
                </Col>
              </Form.Group>
              <h3 style={{ fontWeight: "bold", marginBottom: 20, marginTop: 40 }}>Data Pendukung 1</h3>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Nama Istri / Suami
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Nama" name="nama_pasangan" value={data.nama_pasangan} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Tanggal Lahir Istri / Suami
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" name="tgl_lahir_pasangan" value={data.tgl_lahir_pasangan} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No Telp Istri / Suami
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No Telp Rumah" name="no_telp_pasangan" value={data.no_telp_pasangan} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No KTP Istri / Suami
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No KTP" name="no_ktp_pasangan" value={data.no_ktp_pasangan} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No BPJS Istri / Suami
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No BPJS" name="no_bpjs_pasangan" value={data.no_bpjs_pasangan} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Data Bank Istri / Suami
                </Form.Label>
                <Col xs={3}>
                  <Form.Control placeholder="Nama Bank" name="nama_bank_pasangan" value={data.nama_bank_pasangan} disabled={true} />
                </Col>
                <Col>
                  <Form.Control placeholder="No Rekening" name="no_rekening_pasangan" value={data.no_rekening_pasangan} disabled={true} />
                </Col>
              </Form.Group>
              <h3 style={{ fontWeight: "bold", marginBottom: 20, marginTop: 40 }}>Data Pendukung 2</h3>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Nama Anak
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Nama" name="nama_anak" value={data.nama_anak} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Tanggal Lahir Anak
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="date" name="tgl_lahir_anak" value={data.tgl_lahir_anak} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No Telp Anak
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No Telp Rumah" name="no_tlp_anak" value={data.no_tlp_anak} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No KTP Anak
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No KTP" name="no_ktp_anak" value={data.no_ktp_anak} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  No BPJS Anak
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="No BPJS" name="no_bpjs_anak" value={data.no_bpjs_anak} disabled={true} />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Data Bank Anak
                </Form.Label>
                <Col xs={3}>
                  <Form.Control placeholder="Nama Bank" name="nama_bank_anak" value={data.nama_bank_anak} disabled={true} />
                </Col>
                <Col>
                  <Form.Control placeholder="No Rekening" name="no_rekening_anak" value={data.no_rekening_anak} disabled={true} />
                </Col>
              </Form.Group>
              <Button variant="outline-danger" onClick={handdleCancel} block>
                Kembali
              </Button>
            </Form>
          </div>
        </Container>
      )}
    </motion.div>
  );
};
