import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default () => {
  const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";

  const history = useHistory();
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
        url: `${host}/data/uploads/kematian/${dataId}`,
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
      history.push("/claimkematian");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: `Upload Bukti Gagal`,
      });
    }
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Pengajuan Claim Kematian</h1>
      <Container>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>Surat Permohonan dari ahli waris</Form.Label>
            <Form.File.Input name="bukti_tf" onChange={onFormChange} />
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
