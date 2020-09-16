import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button, Spinner, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

export default () => {
  // const host = "http://localhost:3001";
  const host = "https://jatisejahtera-cms.herokuapp.com";
  
  const { dataId } = useParams();
  const [pesan, setPesan] = useState("");
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
    // eslint-disable-next-line
  }, []);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${host}/data/claim-perumahan/${dataId}`,
      headers: {
        token: localStorage.token,
      },
    });
    setData(data);
    setLoading(false);
  };
  const setuju = async () => {
    try {
      if (data) {
        await axios({
          method: "POST",
          url: `${host}/data/pindah-status/perumahan/${dataId}/${Number(data.status) + 1}`,
          headers: {
            token: localStorage.token,
          },
          data: { pesan },
        });
        history.push("/claimperumahan");
      }
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
  };
  const tolak = async () => {
    try {
      if (data) {
        await axios({
          method: "POST",
          url: `${host}/data/pindah-status/perumahan/${dataId}/${Number(data.status) - 1}`,
          headers: {
            token: localStorage.token,
          },
          data: { pesan },
        });
        history.push("/claimperumahan");
      }
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
  };
  function handdleCancel() {
    history.push("/claimperumahan");
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
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Pengajuan Claim Perumahan</p>
          </div>
          <div style={{ marginBottom: 50 }}>
            <div style={{ marginBottom: 50 }}>
              <h3 style={{ fontWeight: "bold", marginBottom: 20 }}>Data Diri</h3>
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
                    Nama Bank
                  </Form.Label>
                  <Col xs={4}>
                    <Form.Control placeholder="Nama Bank" name="nama_bank" value={data.user_anggotum.nama_bank} disabled={true} />
                  </Col>
                  <Form.Label column sm="1.5">
                    No Rekening
                  </Form.Label>
                  <Col xs={4}>
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
                <h3 style={{ fontWeight: "bold", marginBottom: 20, marginTop: 40 }}>Data Pendukung 1</h3>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Nama Pasangan
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="Nama" name="nama_pasangan" value={data.user_anggotum.nama_pasangan} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Tgl Lahir Pasangan
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="date" name="tgl_lahir_pasangan" value={data.user_anggotum.tgl_lahir_pasangan} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    No Telp Pasangan
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="No Telp Rumah" name="no_telp_pasangan" value={data.user_anggotum.no_telp_pasangan} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    No KTP Pasangan
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="No KTP" name="no_ktp_pasangan" value={data.user_anggotum.no_ktp_pasangan} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    No BPJS Pasangan
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="No BPJS" name="no_bpjs_pasangan" value={data.user_anggotum.no_bpjs_pasangan} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Data Bank Pasangan
                  </Form.Label>
                  <Col xs={3}>
                    <Form.Control placeholder="Nama Bank" name="nama_bank_pasangan" value={data.user_anggotum.nama_bank_pasangan} disabled={true} />
                  </Col>
                  <Col>
                    <Form.Control placeholder="No Rekening" name="no_rekening_pasangan" value={data.user_anggotum.no_rekening_pasangan} disabled={true} />
                  </Col>
                </Form.Group>
                <h3 style={{ fontWeight: "bold", marginBottom: 20, marginTop: 40 }}>Data Pendukung 2</h3>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Nama Anak
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="Nama" name="nama_anak" value={data.user_anggotum.nama_anak} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Tanggal Lahir Anak
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="date" name="tgl_lahir_anak" value={data.user_anggotum.tgl_lahir_anak} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    No Telp Anak
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="No Telp Rumah" name="no_tlp_anak" value={data.user_anggotum.no_tlp_anak} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    No KTP Anak
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="No KTP" name="no_ktp_anak" value={data.user_anggotum.no_ktp_anak} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    No BPJS Anak
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" placeholder="No BPJS" name="no_bpjs_anak" value={data.user_anggotum.no_bpjs_anak} disabled={true} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Data Bank Anak
                  </Form.Label>
                  <Col xs={3}>
                    <Form.Control placeholder="Nama Bank" name="nama_bank_anak" value={data.user_anggotum.nama_bank_anak} disabled={true} />
                  </Col>
                  <Col>
                    <Form.Control placeholder="No Rekening" name="no_rekening_anak" value={data.user_anggotum.no_rekening_anak} disabled={true} />
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Rekening Bank
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" value={data.no_rekening_bank} disabled={true} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Pendukung
              </Form.Label>
              <Col sm="10">
                <div style={{ display: "flex", flexDirection: "row", marginBottom: 20, flexWrap: "wrap" }}>
                  <div style={{ height: 300, width: 200, justifyContent: "center", textAlign: "center" }}>
                    <p style={{ textAlign: "center" }}>Data 1</p>
                    <Image src={data.blanko_permohonan} style={{ height: 200 }} />
                  </div>
                  <div style={{ height: 300, width: 200, justifyContent: "center", textAlign: "center" }}>
                    <p style={{ textAlign: "center" }}>Data 2</p>
                    <Image src={data.surat_keputusan_phk} style={{ height: 200 }} />
                  </div>
                  <div style={{ height: 300, width: 200, justifyContent: "center", textAlign: "center" }}>
                    <p style={{ textAlign: "center" }}>Data 3</p>
                    <Image src={data.data_keluarga} style={{ height: 200 }} />
                  </div>
                  <div style={{ height: 300, width: 200, justifyContent: "center", textAlign: "center" }}>
                    <p style={{ textAlign: "center" }}>Data 4</p>
                    <Image src={data.akumulasi_saldo} style={{ height: 200 }} />
                  </div>
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Catatan
              </Form.Label>
              <Col sm="10">
                <Form.Control as="textarea" placeholder="Catatan" rows="3" onChange={(e) => setPesan(e.target.value)} />
              </Col>
            </Form.Group>
            <Row style={{ marginBottom: 20 }}>
              <Col>
                <Button variant="outline-success" block onClick={setuju}>
                  Iya
                </Button>
              </Col>
              <Col>
                <Button variant="outline-danger" block onClick={tolak}>
                  Tidak
                </Button>
              </Col>
            </Row>
            <Button variant="outline-warning" onClick={handdleCancel} block>
              Kembali
            </Button>
          </div>
        </Container>
      )}
    </motion.div>
  );
};
