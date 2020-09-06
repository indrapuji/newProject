import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default () => {
  const history = useHistory();
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
    if (!localStorage.token) history.push('/');
  }, [history])
  function handdleBack() {
    history.push("/data/claim");
  }
  const [formData, setFormData] = useState({
    blanko_permohonan: '',
    surat_keputusan_phk: '',
    data_keluarga: '',
    akumulasi_saldo: '',
  });
  const onFormChange = (e) => {
    e.preventDefault();
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    })
  }
  const onFormSubmit = async(e) => {
    try {
      e.preventDefault();
      const newFormData = new FormData();
      for(let keys in formData) {
        newFormData.append(`${keys}`, formData[keys]);
      };
      await axios({
        method: "POST",
        url: 'http://localhost:3001/data/uploads/perumahan',
        data: newFormData,
        headers: {
          token: localStorage.token
        }
      });
      history.push('/');
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
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Kematian</h1>
      <Container>
        <Form onSubmit={ onFormSubmit }>
          <Form.Group>
            <Form.Label>Blanko Permohonan dari peserta</Form.Label>
            <Form.File id="custom-file" label="file input" custom name="blanko_permohonan" onChange={ onFormChange } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat Keputusan pemberhentian hubungan kerja (PHK) </Form.Label>
            <Form.File id="custom-file" label="file input" custom name="surat_keputusan_phk" onChange={ onFormChange } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data keluarga dari surat keterangan pemberhentian penghasilan (SKPP) atau dari blanko data keluarga (P10)</Form.Label>
            <Form.File id="custom-file" label="file input" custom name="data_keluarga" onChange={ onFormChange } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Akumulasi saldo iuran dari program gaji atau perhitungan manual </Form.Label>
            <Form.File id="custom-file" label="file input" custom name="akumulasi_saldo" onChange={ onFormChange } />
          </Form.Group>
          <Button variant="success" onClick={handdleBack} block>
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
