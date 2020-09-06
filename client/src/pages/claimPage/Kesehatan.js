import React from "react";
import { motion } from "framer-motion";
import { Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
  function handdleBack() {
    history.push("/data/claim");
  }
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Kesehatan</h1>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Surat permohonan bantuan biaya rawat inap dari pensiunan </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kuitansi asli dari Rumah Sakit pensiunan di rawat</Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat keterangan sakit yang di tanda tangani oleh rumah sakit </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy SK Pensiun</Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo copy kartu peserta </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>No Rekening Bank tujuan bayar</Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={handdleBack} block>
          Back
        </Button>
      </Container>
    </motion.div>
  );
};
