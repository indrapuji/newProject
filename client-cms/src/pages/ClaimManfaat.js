import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Spinner, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import axios from 'axios';

export default () => {
  // const history = useHistory();
  const onActive = "/claimmanfaat";

  useEffect(async() => {
    fetchApi();
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchApi = async() => {
    const { data } = await axios({
      method: 'GET',
      url: `http://localhost:3001/data/claim-nilai-hidup`,
      headers: {
        token: localStorage.token,
      }
    });
    setData(data);
    setLoading(false);
  }
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
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>Data Pengajuan Claim Kematian</h1>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="small">No</th>
              <th className="small">Surat permohonan pensiunan perum perhutani</th>
              <th className="small">Surat pernyataan dari pensiunan perum perhutani</th>
              <th className="small">Photo Copy kartu peserta</th>
              <th className="small">Photo Copy SK Pensiun</th>
              <th className="small">No Rekening Bank</th>
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
                    <td className="small">{file.permohonan_pensiunan}</td>
                    <td className="small">{file.pernyataan_dari_pensiunan}</td>
                    <td className="small">{file.fotokopi_kp}</td>
                    <td className="small">{file.fotokopi_sk_pensiun}</td>
                    <td className="small">{file.no_rekening_bank}</td>
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
