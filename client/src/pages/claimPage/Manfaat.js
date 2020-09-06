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
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Manfaat Nilai Hidup</h1>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Surat permohonan pensiunan perum perhutani</Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat pernyataan dari pensiunan perum perhutani </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy kartu peserta </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy SK Pensiun </Form.Label>
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
