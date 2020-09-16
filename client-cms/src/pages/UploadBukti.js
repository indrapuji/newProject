import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import checkPath from "../hooks/checkPath";

export default () => {
  const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";

  const history = useHistory();
  const { dataId } = useParams();
  const location = useLocation();
  const path = checkPath(location.pathname.toString());

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
  useEffect(() => {
    fetchApi();
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${host}/data/butuh-verifikasi`,
      headers: {
        token: localStorage.token,
      },
    });
    setData(data[0]);
    setLoading(false);
  };

  const [formData, setFormData] = useState({
    bukti_tf: "",
  });
  const onFormChange = (e) => {
    e.preventDefault();
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const newFormData = new FormData();
      for (let keys in formData) {
        newFormData.append(`${keys}`, formData[keys]);
      }
      await axios({
        method: "PUT",
        url: `${host}/data/bukti-transfer/${path}/${dataId}`,
        data: newFormData,
        headers: {
          token: localStorage.token,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Upload Bukti Berhasil",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/approve");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: `Upload Bukti Gagal`,
      });
    }
  };

  function handdleCancel() {
    history.push("/approve");
  }
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      {/* {JSON.stringify(data)} */}
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Pengajuan Claim Kematian</h1>
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Detail</p>
        </div>
        <div style={{ marginBottom: 50 }}>
          <h3 style={{ fontWeight: "bold", marginBottom: 20 }}>Data Diri</h3>
        </div>
        {!loading && (
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Nama" name="nama" value={data.user_anggotum.nama} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nomor Induk
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="NIP / NPP / NIK" name="no_induk" value={data.user_anggotum.no_induk} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Alamat Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="Alamat Email" name="email" value={data.user_anggotum.email} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" name="tgl_lahir" value={data.user_anggotum.tgl_lahir} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No KTP" name="no_ktp" value={data.user_anggotum.no_ktp} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No BPJS" name="no_bpjs" value={data.user_anggotum.no_bpjs} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data.user_anggotum Bank
              </Form.Label>
              <Col xs={3}>
                <Form.Control placeholder="Nama Bank" name="nama_bank" value={data.user_anggotum.nama_bank} disabled={true} />
              </Col>
              <Col>
                <Form.Control placeholder="No Rekening" name="no_rekening" value={data.user_anggotum.no_rekening} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Satuan Kerja
              </Form.Label>
              <Col xs={5}>
                <Form.Control placeholder="Satuan Kerja Saat Pensiun" name="satuan_kerja" value={data.user_anggotum.satuan_kerja} disabled={true} />
              </Col>
              <Col>
                <Form.Control placeholder="Golongan Pangkat Saat Pensiun" name="golongan_pangkat" value={data.user_anggotum.golongan_pangkat} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Rumah
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No Telp Rumah" name="no_telp" value={data.user_anggotum.no_telp} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Alamat
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Alamat" name="alamat" value={data.user_anggotum.alamat} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2"></Form.Label>
              <Col xs={5}>
                <Form.Control placeholder="Kelurahan / Desa" name="kelurahan" value={data.user_anggotum.kelurahan} disabled={true} />
              </Col>
              <Col>
                <Form.Control placeholder="Kecamatan" name="kecamatan" value={data.user_anggotum.kecamatan} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2"></Form.Label>
              <Col xs={4}>
                <Form.Control placeholder="Kota / Kabupaten" name="kota" value={data.user_anggotum.kota} disabled={true} />
              </Col>
              <Col>
                <Form.Control placeholder="Kodepos" name="kodepos" value={data.user_anggotum.kodepos} disabled={true} />
              </Col>
              <Col>
                <Form.Control placeholder="Provinsi" name="provinsi" value={data.user_anggotum.provinsi} disabled={true} />
              </Col>
            </Form.Group>
          </Form>
        )}
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>Surat Permohonan dari ahli waris</Form.Label>
            <Form.File.Input name="bukti_tf" onChange={onFormChange} />
          </Form.Group>
          <Button variant="success" onClick={handdleCancel} block>
            Back
          </Button>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};
