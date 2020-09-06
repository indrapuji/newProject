import React from "react";
import { useHistory } from "react-router-dom";
import { Table, Spinner, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import useFetch from "../hooks/useFetch";
import Navigation from "../components/Navigation";

export default () => {
  const history = useHistory();
  const onActive = "/claimperumahan";

  const apiUrl = {
    url: `http://localhost:3001/data/claim-perumahan`,
    headers: {
      token: localStorage.token,
    },
  };
  const [data, loading] = useFetch(apiUrl);

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
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation activePath={onActive} />
      {/* {JSON.stringify(data)} */}
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>Data Pengajuan Claim Perumahan</h1>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="small">No</th>
              <th className="small">Nama</th>
              <th className="small">No Induk</th>
              <th className="small">Satuan Kerja</th>
              <th className="small">Golongan</th>
              <th className="small">No Telp</th>
              <th className="small">Alamat</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan="13" className="small" style={{ textAlign: "center" }}>
                  <Spinner animation="border" variant="success" />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.map((file, idx) => {
                return (
                  <tr key={file.id} style={{ cursor: "pointer" }}>
                    <td className="small">{idx + 1}</td>
                    <td className="small">{file.nama}</td>
                    <td className="small">{file.no_induk}</td>
                    <td className="small">{file.satuan_kerja}</td>
                    <td className="small">{file.golongan_pangkat}</td>
                    <td className="small">{file.no_telp}</td>
                    <td className="small">{file.alamat}</td>
                    <td>
                      <Button variant="primary" size="sm">
                        Check
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </Table>
      </div>
    </motion.div>
  );
};
