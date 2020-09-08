import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Spinner, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import axios from "axios";

export default () => {
  const history = useHistory();
  const onActive = "/claimkesehatan";

  useEffect(() => {
    fetchApi();
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    const { data } = await axios({
      method: "GET",
      url: `https://jatisejahtera-cms.herokuapp.com/data/claim-kesehatan`,
      //   url: `http://localhost:3001/data/claim-kesehatan`,
      headers: {
        token: localStorage.token,
      },
    });
    setData(data);
    setLoading(false);
  };
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
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>Data Pengajuan Claim Kesehatan</h1>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="small">No</th>
              <th className="small">Nama</th>
              <th className="small">No Induk</th>
              <th className="small">Satuan Kerja</th>
              <th className="small">Golongan</th>
              <th className="small">Action</th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan="6" className="small" style={{ textAlign: "center" }}>
                  <Spinner animation="border" variant="success" />
                </td>
              </tr>
            </tbody>
          ) : data.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="6" className="small" style={{ textAlign: "center" }}>
                  Tidak Ada Pengajuan
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.map((file, idx) => {
                return (
                  <tr key={file.id} style={{ cursor: "pointer" }}>
                    <td className="small">{idx + 1}</td>
                    <td className="small">{file.user_anggotum.nama}</td>
                    <td className="small">{file.user_anggotum.no_induk}</td>
                    <td className="small">{file.user_anggotum.satuan_kerja}</td>
                    <td className="small">{file.user_anggotum.golongan_pangkat}</td>
                    <td>
                      <Button variant="primary" size="sm" onClick={() => history.push(`detail/kesehatan/${file.id}`)}>
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
