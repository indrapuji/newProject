import React, { useState, useEffect } from "react";
import host from "../helpers/host";
import { Card, Table, Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Swal from "sweetalert2";

export default function Perumahan() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);
  const [filtered, setFiltered] = useState([]);
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
      const newFiles = file.filter((x) => x.category === "perumahan");
      setFiltered(newFiles);
    }
  }, [file]);

  const [data, setData] = useState({
    category: "perumahan",
    title: "",
    image_url: "",
    text: "",
    status: 1,
  });

  const handleFormInput = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    if (files) {
      setData({
        ...data,
        [name]: files[0],
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  console.log(data);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    for (let key in data) {
      formData.append(`${key}`, data[key]);
    }
    axios({
      method: "POST",
      url: `${host}/content/create`,
      data: formData,
      headers: {
        token: localStorage.getItem("token"),
        "content-type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Data Recorded`,
          showConfirmButton: false,
          timer: 1500,
        });
        setShow(false);
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `${error.response.data.message}`,
          });
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  return (
    <>
      <Sidebar />
      {/* {JSON.stringify(filtered)} */}
      <Card bg="light" text="dark" border="primary" size="sm" style={{ marginLeft: 30, marginRight: 30, marginTop: 30 }}>
        <Card.Header>Perumahan</Card.Header>
        <Card.Body>
          <div style={{ marginBottom: 10 }}>
            <Button variant="info" onClick={() => setShow(true)}>
              Add New
            </Button>
          </div>
          <Table striped bordered hover responsive="sm" size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Image</th>
                <th>Text</th>
                <th>Status</th>
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
            ) : filtered.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="8" className="small" style={{ textAlign: "center" }}>
                    Tidak Ada Data
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {filtered.map((file, idx) => {
                  return (
                    <tr key={file.id} style={{ cursor: "pointer" }}>
                      <td className="small">{idx + 1}</td>
                      <td className="small">{file.title}</td>
                      <td className="small">{file.image_url}</td>
                      <td className="small">{file.text}</td>
                      <td className="small">{file.status === true ? "Active" : "Not Active"}</td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </Table>
        </Card.Body>
      </Card>

      <Modal centered show={show} size="xl" onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Perumahan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Title" onChange={handleFormInput} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows={3} name="text" placeholder="text" onChange={handleFormInput} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" name="status" onChange={handleFormInput}>
                <option value={1}>Active</option>
                <option value={0}>Not Active</option>
              </Form.Control>
            </Form.Group>
            <div className="mb-3">
              <Form.File>
                <Form.File.Label>Image</Form.File.Label>
                <Form.File.Input name="image_url" onChange={handleFormInput} />
              </Form.File>
            </div>
            <Row>
              <Col>
                <Button variant="outline-primary" type="submit" block>
                  Add new
                </Button>
              </Col>
              <Col>
                <Button variant="outline-danger" block onClick={() => setShow(false)}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
