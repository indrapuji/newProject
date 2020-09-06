import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
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
      <h1>Kematian</h1>
      <Button variant="success" onClick={handdleBack}>
        Back
      </Button>
    </motion.div>
  );
};
