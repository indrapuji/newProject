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
  // useEffect(() => {
  //   fetchApi();
  // }, []);
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const fetchApi = async () => {
  //   const { data } = await axios({
  //     method: "GET",
  //     url: `${host}/data/butuh-verifikasi`,
  //     headers: {
  //       token: localStorage.token,
  //     },
  //   });
  //   setData(data[0]);
  //   setLoading(false);
  // };

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
      console.log(err);
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
      <Container>
        <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Pengajuan Claim {path}</h1>

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
