import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Spinner, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import axios from 'axios';
import ReactExport from 'react-export-excel';
import Swal from 'sweetalert2';
import host from '../hooks/host';

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
              <ExcelSheet data={data} name="Data Peserta">
                <ExcelColumn label="Nama" value="data.user_anggotum.nama" />
                <ExcelColumn label="No Induk" value="data.user_anggotum.no_induk" />
                <ExcelColumn label="Alamat Email" value="data.user_anggotum.email" />
                <ExcelColumn label="Tanggal Lahir" value="data.user_anggotum.tgl_lahir" />
                <ExcelColumn label="No KTP" value="data.user_anggotum.no_ktp" />
                <ExcelColumn label="No BPJS" value="data.user_anggotum.no_bpjs" />
                <ExcelColumn label="Nama Bank" value="data.user_anggotum.nama_bank" />
                <ExcelColumn label="No Rekening" value="data.user_anggotum.no_rekening" />
                <ExcelColumn label="Satuan Kerja" value="data.user_anggotum.satuan_kerja" />
                <ExcelColumn label="Golongan" value="data.user_anggotum.golongan_pangkat" />
                <ExcelColumn label="No Telp" value="data.user_anggotum.no_telp" />
                <ExcelColumn label="Alamat" value="data.user_anggotum.alamat" />
                <ExcelColumn label="Kelurahan" value="data.user_anggotum.kelurahan" />
                <ExcelColumn label="Kecamatan" value="data.user_anggotum.kecamatan" />
                <ExcelColumn label="Kota" value="data.user_anggotum.kota" />
                <ExcelColumn label="Kodepos" value="data.user_anggotum.kodepos" />
                <ExcelColumn label="Provinsi" value="data.user_anggotum.provinsi" />
                <ExcelColumn label="Nama Istri / Suami" value="data.user_anggotum.nama_pasangan" />
                <ExcelColumn label="Tanggal Lahir Istri / Suami" value="data.user_anggotum.tgl_lahir_pasangan" />
                <ExcelColumn label="No Telp Istri / Suami" value="data.user_anggotum.no_telp_pasangan" />
                <ExcelColumn label="No KTP Istri / Suami" value="data.user_anggotum.no_ktp_pasangan" />
                <ExcelColumn label="No BPJS Istri / Suami" value="data.user_anggotum.no_bpjs_pasangan" />
                <ExcelColumn label="Nama Bank Istri / Suami" value="data.user_anggotum.nama_bank_pasangan" />
                <ExcelColumn label="No Rekening Istri / Suami" value="data.user_anggotum.no_rekening_pasangan" />
                <ExcelColumn label="Nama Anak" value="data.user_anggotum.nama_anak" />
                <ExcelColumn label="Tanggal Lahir Anak" value="data.user_anggotum.tgl_lahir_anak" />
                <ExcelColumn label="No Telp Anak" value="data.user_anggotum.no_tlp_anak" />
                <ExcelColumn label="No KTP Anak" value="data.user_anggotum.no_ktp_anak" />
                <ExcelColumn label="No BPJS Anak" value="data.user_anggotum.no_bpjs_anak" />
                <ExcelColumn label="Nama Bank Anak" value="data.user_anggotum.nama_bank_anak" />
                <ExcelColumn label="No Rekening Anak" value="data.user_anggotum.no_rekening_anak" />
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
