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
    surat_permohonan_bantuan_biaya: '',
    kuitansi_asli_rs: '',
    surat_keterangan_rs: '',
    fotokopi_sk_pensiun: '',
    fotokopi_kp: ''
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
        url: 'http://localhost:3001/data/uploads/kesehatan',
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
            <Form.Label>Surat permohonan bantuan biaya rawat inap dari pensiunan</Form.Label>
            <Form.File id="custom-file" label="file input" custom name="surat_permohonan_bantuan_biaya" onChange={ onFormChange } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kuitansi asli dari Rumah Sakit pensiunan di rawat </Form.Label>
            <Form.File id="custom-file" label="file input" custom name="kuitansi_asli_rs" onChange={ onFormChange } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat keterangan sakit yang di tanda tangani oleh rumah sakit</Form.Label>
            <Form.File id="custom-file" label="file input" custom name="surat_keterangan_rs" onChange={ onFormChange } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy SK Pensiun </Form.Label>
            <Form.File id="custom-file" label="file input" custom name="fotokopi_sk_pensiun" onChange={ onFormChange } />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo copy kartu peserta </Form.Label>
            <Form.File id="custom-file" label="file input" custom name="fotokopi_kp" onChange={ onFormChange } />
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
