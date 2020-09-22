import React, { useState, useEffect } from "react";
import host from "../helpers/host";
import { Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Home() {
  const [file, setFile] = useState([]);
  const [pendidikans, setPendidikans] = useState([]);
  const [kesehatans, setKesehatans] = useState([]);
  const [perumahans, setPerumahans] = useState([]);
  const [sosials, setSosials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const { data } = await axios({
      method: "GET",
      url: `${host}/content`,
      headers: {
        token: localStorage.token,
      },
    });
    setFile(data);
    setLoading(false);
  };

  useEffect(() => {
    if (file) {
      const newPendidikans = file.filter((x) => x.category === "pendidikan");
      setPendidikans(newPendidikans);
      const newKesehatans = file.filter((x) => x.category === "kesehatan");
      setKesehatans(newKesehatans);
      const newPerumahans = file.filter((x) => x.category === "perumahan");
      setPerumahans(newPerumahans);
      const newSosials = file.filter((x) => x.category === "sosial");
      setSosials(newSosials);
    }
  }, [file]);

  return (
    <>
      <Sidebar />
      <h1 style={{ textAlign: "center", marginTop: 20 }}>Dashboard</h1>
      {/* {JSON.stringify(filtered)} */}

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", marginTop: 25 }}>
        <div style={{ marginRight: 10 }}>
          <Card bg="primary" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Pendidikan</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{pendidikans.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginRight: 10 }}>
          <Card bg="success" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Kesehatan</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{kesehatans.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginRight: 10 }}>
          <Card bg="warning" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Perumahan</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{perumahans.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginRight: 10 }}>
          <Card bg="info" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Sosial</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{sosials.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginRight: 10 }}>
          <Card bg="primary" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Sosial</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{sosials.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginRight: 10 }}>
          <Card bg="success" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Sosial</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{sosials.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginRight: 10 }}>
          <Card bg="warning" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Sosial</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{sosials.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginRight: 10 }}>
          <Card bg="info" text="dark" style={{ width: "18rem" }} className="mb-2">
            <Card.Header style={{ textAlign: "center" }}>Sosial</Card.Header>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}> Total Post </Card.Title>
              <Card.Text style={{ fontSize: 30, textAlign: "center" }}>{sosials.length}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
