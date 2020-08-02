import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Penanaman from "../assets/image/penanamanjagung.jpeg";
import BangunKemandirian from "../assets/image/bangunkemandirian.jpeg";
import BriDukung from "../assets/image/bridukungjati.jpeg";
import Santunan from "../assets/image/santunan.jpeg";
import { Container } from "react-bootstrap";

export default () => {
  return (
    <>
      <Navigation />
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>GALERY</p>
        </div>
        <div style={{ padding: 10 }}>
          <div className="container mt-40">
            <div className="row mt-30">
              <div className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={Penanaman} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Penanaman Jagung
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={BangunKemandirian} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Bangun Kemandirian Desa
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={BriDukung} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Program Jati Sejahtera
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={Santunan} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Santunan Yatim Piatu
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
