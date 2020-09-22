import React from "react";
import { Card, Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <Card bg="light" text="dark" border="primary" size="sm" style={{  marginLeft: 30, marginRight: 30, marginTop: 30 }}>
        <Card.Header>Kesehatan</Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Action</th>
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
    </>
  );
}

export default Home;
