import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Button, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import formatDate from "../hooks/FormatDate";
import ReactExport from "react-export-excel";
import Navigation from "../components/Navigation";
import axios from "axios";
import Swal from "sweetalert2";

export default () => {
  // const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";
  const host = "http://128.199.238.147:3001";

  const history = useHistory();
  const onActive = "/";

  useEffect(() => {
    fetchApi();
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchApi = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${host}/users/daftar-anggota`,
      headers: {
        token: localStorage.token,
      },
    });
    setData(data);
    setLoading(false);
  };

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  function handdleDetail(dataId) {
    history.push(`/detail/${dataId}`);
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
  function handdleSukses() {
    Swal.fire({
      icon: "success",
      title: "Update data downloaded",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation onActive={onActive} />
      {/* {JSON.stringify(data)} */}
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>Data Update</h1>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        {!loading ? (
          <div style={{ marginBottom: 10 }}>
            <ExcelFile
              element={
                <Button variant="success" onClick={handdleSukses}>
                  Download
                </Button>
              }
              filename="Pengkinian Data"
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
              <th className="small">Email</th>
              <th className="small">tanggal Lahir</th>
              <th className="small">No KTP</th>
              <th className="small">No BPJS</th>
              <th className="small">Nama Bank</th>
              <th className="small">No Rekening</th>
              <th className="small">Satuan Kerja</th>
              <th className="small">Golongan</th>
              <th className="small">No Telp</th>
              <th className="small">Alamat</th>
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
                  <tr key={file.id} onClick={() => handdleDetail(file.id)} style={{ cursor: "pointer" }}>
                    <td className="small">{idx + 1}</td>
                    <td className="small">{file.nama}</td>
                    <td className="small">{file.no_induk}</td>
                    <td className="small">{file.email}</td>
                    <td className="small">{formatDate(file.tgl_lahir)}</td>
                    <td className="small">{file.no_ktp}</td>
                    <td className="small">{file.no_bpjs}</td>
                    <td className="small">{file.nama_bank}</td>
                    <td className="small">{file.no_rekening}</td>
                    <td className="small">{file.satuan_kerja}</td>
                    <td className="small">{file.golongan_pangkat}</td>
                    <td className="small">{file.no_telp}</td>
                    <td className="small">{file.alamat}</td>
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
