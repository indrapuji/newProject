import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Spinner, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import axios from 'axios';
import ReactExport from 'react-export-excel';
import Swal from 'sweetalert2';
import host from '../hooks/host';
import convertData from '../hooks/convertData';

export default () => {
  // const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";
  // const host = "http://128.199.238.147:3001";

  const history = useHistory();
  const onActive = '/claimkematian';
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  useEffect(() => {
    fetchApi();
  }, []);
  const [data, setData] = useState([]);
  const [downloadData, setDownloadData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    const { data } = await axios({
      method: 'GET',
      url: `${host}/data/claim-kematian`,
      headers: {
        token: localStorage.token,
      },
    });
    setData(data);
    setDownloadData(convertData(data, 'kematian'));
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

  function handdleKematian() {
    Swal.fire({
      icon: 'success',
      title: 'Claim data Kematian downloaded',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation activePath={onActive} />
      {/* {JSON.stringify(data)} */}
      <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>Data Pengajuan Claim Kematian</h1>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        {!loading ? (
          <div style={{ marginBottom: 10 }}>
            <ExcelFile
              element={
                <Button variant="success" onClick={handdleKematian}>
                  Download
                </Button>
              }
              filename="Pengajuan Claim Kematian"
            >
              <ExcelSheet data={downloadData} name="Claim Kematian">
                <ExcelColumn label="Nama" value="nama" />
                <ExcelColumn label="No Induk" value="no_induk" />
                <ExcelColumn label="Surat Permohonan Ahli Waris" value="permohonan_ahli_waris" />
                <ExcelColumn label="Surat Keterangan Meninggal dari Lurah" value="keterangan_menginggal_dunia_lurah" />
                <ExcelColumn label="Surat Keterangan Meninggal dari Rumah Sakit" value="keterangan_meninggal_dunia_rumah_sakit" />
                <ExcelColumn label="Surat Keterangan dari Kepolisian" value="keterangan_kepolisian" />
                <ExcelColumn label="Fotokopi KTP" value="fotokopi_kp" />
                <ExcelColumn label="Fotokopi KK" value="fotokopi_kk" />
                <ExcelColumn label="Fotocopi SK Pengangkatan" value="fotokopi_sk_pengangkatan" />
                <ExcelColumn label="Fotokopi SK Pensiun" value="fotokopi_sk_pensiun" />
              </ExcelSheet>
            </ExcelFile>
          </div>
        ) : null}
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
                <td colSpan="6" className="small" style={{ textAlign: 'center' }}>
                  <Spinner animation="border" variant="success" />
                </td>
              </tr>
            </tbody>
          ) : data.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="6" className="small" style={{ textAlign: 'center' }}>
                  Tidak Ada Pengajuan
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.map((file, idx) => {
                return (
                  <tr key={file.id} style={{ cursor: 'pointer' }}>
                    <td className="small">{idx + 1}</td>
                    <td className="small">{file.user_anggotum.nama}</td>
                    <td className="small">{file.user_anggotum.no_induk}</td>
                    <td className="small">{file.user_anggotum.satuan_kerja}</td>
                    <td className="small">{file.user_anggotum.golongan_pangkat}</td>
                    <td>
                      <Button variant="primary" size="sm" onClick={() => history.push(`detail/kematian/${file.id}`)}>
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
