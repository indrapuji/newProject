import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Spinner, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import axios from 'axios';
import FormatDate from '../hooks/FormatDate';
import host from '../hooks/host';
import Swal from 'sweetalert2';
import ReactExport from 'react-export-excel';

export default () => {
  // const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";
  // const host = "http://128.199.238.147:3001";

  const history = useHistory();
  const onActive = '/approve';
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
      url: `${host}/data/butuh-verifikasi`,
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
  function handdleApprove() {
    Swal.fire({
      icon: 'success',
      title: 'Approve data downloaded',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation activePath={onActive} />
      {/* {JSON.stringify(data)} */}
      <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>Data Pengajuan Claim Yang Telah Disetujui</h1>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        {!loading ? (
          <div style={{ marginBottom: 10 }}>
            <ExcelFile
              element={
                <Button variant="success" onClick={handdleApprove}>
                  Download
                </Button>
              }
              filename="Pengajuan Claim Approve"
            >
              <ExcelSheet data={data} name="Data Peserta">
                <ExcelColumn label="Nama" value="nama" />
                <ExcelColumn label="No Induk" value="no_induk" />
                <ExcelColumn label="Alamat Email" value="email" />
                <ExcelColumn label="Tanggal Lahir" value="tgl_lahir" />
                <ExcelColumn label="No KTP" value="no_ktp" />
                <ExcelColumn label="No BPJS" value="no_bpjs" />
                <ExcelColumn label="Nama Bank" value="nama_bank" />
                <ExcelColumn label="No Rekening" value="no_rekening" />
                <ExcelColumn label="Satuan Kerja" value="satuan_kerja" />
                <ExcelColumn label="Golongan" value="golongan_pangkat" />
                <ExcelColumn label="No Telp" value="no_telp" />
                <ExcelColumn label="Alamat" value="alamat" />
                <ExcelColumn label="Kelurahan" value="kelurahan" />
                <ExcelColumn label="Kecamatan" value="kecamatan" />
                <ExcelColumn label="Kota" value="kota" />
                <ExcelColumn label="Kodepos" value="kodepos" />
                <ExcelColumn label="Provinsi" value="provinsi" />
                <ExcelColumn label="Nama Istri / Suami" value="nama_pasangan" />
                <ExcelColumn label="Tanggal Lahir Istri / Suami" value="tgl_lahir_pasangan" />
                <ExcelColumn label="No Telp Istri / Suami" value="no_telp_pasangan" />
                <ExcelColumn label="No KTP Istri / Suami" value="no_ktp_pasangan" />
                <ExcelColumn label="No BPJS Istri / Suami" value="no_bpjs_pasangan" />
                <ExcelColumn label="Nama Bank Istri / Suami" value="nama_bank_pasangan" />
                <ExcelColumn label="No Rekening Istri / Suami" value="no_rekening_pasangan" />
                <ExcelColumn label="Nama Anak" value="nama_anak" />
                <ExcelColumn label="Tanggal Lahir Anak" value="tgl_lahir_anak" />
                <ExcelColumn label="No Telp Anak" value="no_tlp_anak" />
                <ExcelColumn label="No KTP Anak" value="no_ktp_anak" />
                <ExcelColumn label="No BPJS Anak" value="no_bpjs_anak" />
                <ExcelColumn label="Nama Bank Anak" value="nama_bank_anak" />
                <ExcelColumn label="No Rekening Anak" value="no_rekening_anak" />
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
              <th className="small">Kategori Claim</th>
              <th className="small">Tanggal Approve</th>
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
                <td colSpan="8" className="small" style={{ textAlign: 'center' }}>
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
                    <td className="small">{file.pesan_claim.claim_category}</td>
                    <td className="small">{FormatDate(file.pesan_claim.updatedAt)}</td>
                    {file.pesan_claim.claim_category === 'Kematian' && (
                      <td>
                        <Button variant="primary" size="sm" onClick={() => history.push(`/upload/kematian/${file.user_anggotum.nama}/${file.id}`)}>
                          Upload Bukti
                        </Button>
                      </td>
                    )}
                    {file.pesan_claim.claim_category === 'Kesehatan' && (
                      <td>
                        <Button variant="primary" size="sm" onClick={() => history.push(`/upload/kesehatan/${file.user_anggotum.nama}/${file.id}`)}>
                          Upload Bukti
                        </Button>
                      </td>
                    )}
                    {file.pesan_claim.claim_category === 'Nilai Hidup' && (
                      <td>
                        <Button variant="primary" size="sm" onClick={() => history.push(`/upload/nilai-hidup/${file.user_anggotum.nama}/${file.id}`)}>
                          Upload Bukti
                        </Button>
                      </td>
                    )}
                    {file.pesan_claim.claim_category === 'Pendidikan' && (
                      <td>
                        <Button variant="primary" size="sm" onClick={() => history.push(`/upload/pendidikan/${file.user_anggotum.nama}/${file.id}`)}>
                          Upload Bukti
                        </Button>
                      </td>
                    )}
                    {file.pesan_claim.claim_category === 'Perumahan' && (
                      <td>
                        <Button variant="primary" size="sm" onClick={() => history.push(`/upload/perumahan/${file.user_anggotum.nama}/${file.id}`)}>
                          Upload Bukti
                        </Button>
                      </td>
                    )}
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
