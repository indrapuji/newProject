import React, { useState } from "react";
import host from "../helpers/host";
import { useHistory } from "react-router-dom";
import { Card, Table, Button, Modal, Form, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Swal from "sweetalert2";

function Pendidikan() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const [data, setData] = useState({
    category: "pendidikan",
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
    }
  };

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
      <Card bg="light" text="dark" border="primary" size="sm" style={{ marginLeft: 30, marginRight: 30, marginTop: 30 }}>
        <Card.Header>Pendidikan</Card.Header>
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
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Pendidikan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Title" onChange={handleFormInput} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control type="text" name="text" placeholder="text" onChange={handleFormInput} />
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
                <Form.File.Input name="image_url" />
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

export default Pendidikan;
