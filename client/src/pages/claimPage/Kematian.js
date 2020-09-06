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
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Kematian</h1>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Surat Permohonan dari ahli waris</Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat keterangan meninggal dunia dari lurah </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat keterangan meninggal dari RS apabila peserta meninggal nya di Rumah Sakit</Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat Keterangan dari Kepolisian apabila peserta meninggal dunia akibat kecelakaan </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo copy kartu peserta </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy kartu keluarga </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy SK pengangkatan </Form.Label>
            <Form.File id="custom-file" label="file input" custom />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy Sk.Pensiun </Form.Label>
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
