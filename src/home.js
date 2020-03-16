import React, { useState, useEffect } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { getSpecies } from "./_actions/species";
// import { connect } from "react-redux";
import {
  Modal,
  ModalTitle,
  Button,
  Form,
  Card,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Table
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdTrain } from "react-icons/io";
import { FaExchangeAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

class home extends React.Component {
  state = { show: false };
  statee = { showw: false };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleClosee = () => {
    this.setState({ showw: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleShoww = () => {
    this.setState({ showw: true });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="icon">
            <p>TIKET-KU</p>
          </div>
          <button className="buttonregister" onClick={this.handleShow}>
            register
          </button>
          <Modal show={this.state.show} onHide={this.state.show}>
            <Modal.Header closeButton onClick={this.handleClose}>
              <Modal.Title className="textlore">Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicJenisKelamin">
                  <select class="browser-default custom-select custom-select-md mb-1">
                    <option style={{ fontsize: "16px" }}>Male</option>
                    <option style={{ fontsize: "16px" }}>Female</option>
                  </select>
                </Form.Group>
                <Form.Group controlId="formBasicTelephone">
                  <Form.Control type="text" placeholder="Telp" />
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Link to="/dashboard">
                <Button className="buttonregisterr">Register</Button>
              </Link>
            </Modal.Footer>
          </Modal>

          <button className="buttonlogin" onClick={this.handleShoww}>
            login
          </button>
          <Modal show={this.state.showw} onHide={this.state.showw}>
            <Modal.Header closeButton onClick={this.handleClosee}>
              <Modal.Title className="textlore">Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Link to="/dashboard">
                <Button variant="primary" className="buttonloginn">
                  Login
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </header>

        <div className="isi">
          <h1 className="iconn">
            <b>SELAMAT DATANG DI TIKET-KU !!!</b>.
          </h1>
          <h6 className="iconnn">
            Pesan tiket di TIKET-KU menjadi lebih mudah dan cepat
          </h6>
          <Card
            style={{
              position: "absolute",
              width: "18rem",
              height: "120px",
              top: "110px",
              left: "850px"
            }}
          >
            <Card.Img
              src="img/screen-3.jpg"
              style={{
                height: "120px",
                border: "5px solid #FFFFFF",
                boxsizing: "border-box",
                boxshadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
                borderradius: "10px"
              }}
            />
          </Card>

          <Card
            style={{
              position: "absolute",
              width: "18rem",
              height: "120px",
              top: "90px",
              left: "800px"
            }}
          >
            <Card.Img
              src="img/promo-kai_20181014_114809.jpg"
              style={{
                height: "120px",
                border: "5px solid #FFFFFF",
                boxsizing: "border-box",
                boxshadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
                borderradius: "10px"
              }}
            />
          </Card>
        </div>

        <div className="isii">
          <Card
            style={{
              position: "absolute",
              width: "1050px",
              height: "120px",
              top: "-20px",
              left: "100px",
              boxshadow: "0px 5px 10px rgba(0, 0, 0, 0.25)"
            }}
          >
            <Row>
              <Col md="4" className="card">
                <div className="kai">
                  <IoMdTrain className="icontrain" />
                  Tiket Kereta Api
                </div>
              </Col>
              <Col md="8" className="cardd">
                <a className="tiket">Tiket Kereta Api</a>
                <Form className="form">
                  <b>Asal</b>
                  <Form.Control type="text" placeholder="Surabaya" />
                </Form>
                <FaCircle className="circle" />
                <FaExchangeAlt className="transfericon" />
                <Form className="formm">
                  <b>Tujuan</b>
                  <Form.Control type="text" placeholder="Jakarta" />
                </Form>
                <Form className="formmm">
                  <b>Tanggal Berangkat</b>
                  <Form.Control type="date" placeholder="" />
                </Form>
                <Form className="formmmm">
                  {["checkbox"].map(type => (
                    <div key={type} className="mb-3">
                      <Form.Check type={type} id={`check-api-${type}`}>
                        <Form.Check.Input type={type} isValid />
                        <Form.Check.Label>
                          <a style={{ fontcolor: "#000000" }}>Pulang Pergi</a>
                        </Form.Check.Label>
                        <Form.Control.Feedback type="valid"></Form.Control.Feedback>
                      </Form.Check>
                    </div>
                  ))}
                </Form>
                <Form className="dropdown">
                  <b>Dewasa</b>
                  <DropdownButton className="dropdown1">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </Form>
                <Form className="dropdownn">
                  <b>Bayi</b>
                  <DropdownButton className="dropdown2">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </Form>
                <Button className="buttoncaritiket">Cari Tiket</Button>
              </Col>
            </Row>
          </Card>
          <Table responsive size="sm" className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama Kereta</th>
                <th>Berangkat</th>
                <th>Tiba</th>
                <th>Durasi</th>
                <th>Harga Per Orang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nama Kereta</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* <div className="bottom">
          <footer> FIND YOUR PET'S MATCH</footer>
        </div> */}
      </div>
    );
  }
}
export default home;
