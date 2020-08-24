import React, { useEffect } from "react";
import { Card, CardDeck, Image } from "react-bootstrap";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Pendidikan from "../assets/image/pendidikan.jpeg";
import Sosial from "../assets/image/sosial.jpeg";
import Perumahan from "../assets/image/perumahan.jpeg";
import Kesehatan from "../assets/image/kesehatan.jpeg";
import Penanaman from "../assets/image/penanamanjagung.jpeg";
import BangunKemandirian from "../assets/image/bangunkemandirian.jpeg";
import BriDukung from "../assets/image/bridukungjati.jpeg";
import Santunan from "../assets/image/santunan.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Visimisi from "../components/Visimisi";
import Profile from "../components/Profile";
import Berita from "../components/Berita";
import "../page.css";
import Aos from "aos";
import "aos/dist/aos.css";
import TopBanner from "../assets/landingpage/top_background2.jpg";

export default () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

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

  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <div style={bannerHome}>
        <Navigation />
        <div style={program}>
          <div data-aos="fade-up">
            <p style={programTitle}>Program kami</p>
          </div>
          <CardDeck>
            <div data-aos="zoom-in">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Pendidikan} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Pendidikan</Card.Title>
                  <Card.Text>
                    Education Is The Most Powerful Weapon Which You Can Use To Change The World <br />
                    <span style={{ fontWeight: "bold" }}>- Nelson Mandel</span>
                  </Card.Text>
                  <Link to="/program/pendidikan">Selengkapnya</Link>
                </Card.Body>
              </Card>
            </div>
            <div data-aos="zoom-in">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Sosial} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Sosial</Card.Title>
                  <Card.Text>
                    People don't care how much you know until they know how much you care
                    <br />
                    <span style={{ fontWeight: "bold" }}>- John C mAxwell</span>
                  </Card.Text>
                  <Link to="/program/sosial">Selengkapnya</Link>
                </Card.Body>
              </Card>
            </div>
            <div data-aos="zoom-in">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Perumahan} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Perumahan</Card.Title>
                  <Card.Text>
                    A House Is a Machine For Living in
                    <br />
                    <br />
                    <span style={{ fontWeight: "bold" }}>- LE CORBUSIER</span>
                  </Card.Text>
                  <Link to="/program/perumahan">Selengkapnya</Link>
                </Card.Body>
              </Card>
            </div>
            <div data-aos="zoom-in">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Kesehatan} style={{ height: "10rem" }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Kesehatan</Card.Title>
                  <Card.Text>
                    He who has health , has hope ; and he who has hope, has everything
                    <br />
                    <span style={{ fontWeight: "bold" }}>- Arabian Proverb</span>
                  </Card.Text>
                  <Link to="/program/kesehatan">Selengkapnya</Link>
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
        </div>

        {/* <div data-aos="fade-left" style={{ position: "absolute", zIndex: 1, left: 1250, top: 750 }}>
          <Image src={require("../assets/landingpage/leaf_top.png")} style={{ width: 150 }} />
        </div>
        <div data-aos="fade-right" style={{ position: "absolute", zIndex: 1, left: "-10", top: 1100 }}>
          <Image src={require("../assets/landingpage/leaf_bottom.png")} style={{ width: 200 }} />
        </div>
        <div data-aos="zoom-in" style={{ position: "absolute", left: "-10", top: 2000 }}>
          <Image src={require("../assets/landingpage/leaf_bottom.png")} style={{ width: 300 }} />
        </div>
        <div data-aos="fade-up" style={{ position: "absolute", left: 1000, top: 3000 }}>
          <Image src={require("../assets/landingpage/leaf_top_large.png")} style={{ width: 300 }} />
        </div> */}
      </div>
    </motion.div>
  );

  // return (
  //   <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
  //     <Navigation />
  //     <div style={{ position: "relative", backgroundColor: "d3dae2" }}>
  //       <Image className="backgroundImg" src={require("../assets/landingpage/top_background.jpg")} fluid />
  //       <div data-aos="fade-left" style={{ position: "absolute", zIndex: 1, left: 1250, top: 750 }}>
  //         <Image src={require("../assets/landingpage/leaf_top.png")} style={{ width: 150 }} />
  //       </div>
  //       <div data-aos="fade-right" style={{ position: "absolute", zIndex: 1, left: "-10", top: 1100 }}>
  //         <Image src={require("../assets/landingpage/leaf_bottom.png")} style={{ width: 200 }} />
  //       </div>
  //       <div data-aos="zoom-in" style={{ position: "absolute", left: "-10", top: 2000 }}>
  //         <Image src={require("../assets/landingpage/leaf_bottom.png")} style={{ width: 300 }} />
  //       </div>
  //       <div data-aos="fade-up" style={{ position: "absolute", left: 1000, top: 3000 }}>
  //         <Image src={require("../assets/landingpage/leaf_top_large.png")} style={{ width: 300 }} />
  //       </div>
  //       <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
  //         <div data-aos="fade-up">
  //           <p
  //             style={{
  //               textAlign: "center",
  //               fontWeight: "bolder",
  //               marginTop: -170,
  //               marginBottom: 100,
  //               fontSize: 40,
  //               color: "black",
  //             }}
  //           >
  //             Program kami
  //           </p>
  //         </div>
  //         <CardDeck>
  //           <div data-aos="zoom-in">
  //             <Card style={{ width: "18rem" }}>
  //               <Card.Img variant="top" src={Pendidikan} style={{ height: "10rem" }} />
  //               <Card.Body>
  //                 <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Pendidikan</Card.Title>
  //                 <Card.Text>
  //                   Education Is The Most Powerful Weapon Which You Can Use To Change The World <br />
  //                   <span style={{ fontWeight: "bold" }}>- Nelson Mandel</span>
  //                 </Card.Text>
  //                 <Link to="/program/pendidikan">Selengkapnya</Link>
  //               </Card.Body>
  //             </Card>
  //           </div>
  //           <div data-aos="zoom-in">
  //             <Card style={{ width: "18rem" }}>
  //               <Card.Img variant="top" src={Sosial} style={{ height: "10rem" }} />
  //               <Card.Body>
  //                 <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Sosial</Card.Title>
  //                 <Card.Text>
  //                   People don't care how much you know until they know how much you care
  //                   <br />
  //                   <span style={{ fontWeight: "bold" }}>- John C mAxwell</span>
  //                 </Card.Text>
  //                 <Link to="/program/sosial">Selengkapnya</Link>
  //               </Card.Body>
  //             </Card>
  //           </div>
  //           <div data-aos="zoom-in">
  //             <Card style={{ width: "18rem" }}>
  //               <Card.Img variant="top" src={Perumahan} style={{ height: "10rem" }} />
  //               <Card.Body>
  //                 <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Perumahan</Card.Title>
  //                 <Card.Text>
  //                   A House Is a Machine For Living in
  //                   <br />
  //                   <br />
  //                   <span style={{ fontWeight: "bold" }}>- LE CORBUSIER</span>
  //                 </Card.Text>
  //                 <Link to="/program/perumahan">Selengkapnya</Link>
  //               </Card.Body>
  //             </Card>
  //           </div>
  //           <div data-aos="zoom-in">
  //             <Card style={{ width: "18rem" }}>
  //               <Card.Img variant="top" src={Kesehatan} style={{ height: "10rem" }} />
  //               <Card.Body>
  //                 <Card.Title style={{ fontSize: 30, fontWeight: "bold" }}>Kesehatan</Card.Title>
  //                 <Card.Text>
  //                   He who has health , has hope ; and he who has hope, has everything
  //                   <br />
  //                   <span style={{ fontWeight: "bold" }}>- Arabian Proverb</span>
  //                 </Card.Text>
  //                 <Link to="/program/kesehatan">Selengkapnya</Link>
  //               </Card.Body>
  //             </Card>
  //           </div>
  //         </CardDeck>
  //       </div>
  //     </div>
  //     <Profile />
  //     <Berita />
  //     <Visimisi />
  //     <div style={{ marginTop: 50 }}>
  //       <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>GALERY</p>
  //     </div>
  //     <div style={{ padding: 10, marginBottom: 50 }}>
  //       <div className="container mt-40">
  //         <div className="row mt-30">
  //           <div data-aos="flip-up" className="col-md-3 col-sm-6">
  //             <div className="box15">
  //               <img src={Penanaman} style={{ height: "10rem" }} alt="" />
  //               <div className="box-content">
  //                 <h3 className="title" style={{ textAlign: "center" }}>
  //                   Penanaman Jagung
  //                 </h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-aos="flip-up" className="col-md-3 col-sm-6">
  //             <div className="box15">
  //               <img src={BangunKemandirian} style={{ height: "10rem" }} alt="" />
  //               <div className="box-content">
  //                 <h3 className="title" style={{ textAlign: "center" }}>
  //                   Bangun Kemandirian Desa
  //                 </h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-aos="flip-up" className="col-md-3 col-sm-6">
  //             <div className="box15">
  //               <img src={BriDukung} style={{ height: "10rem" }} alt="" />
  //               <div className="box-content">
  //                 <h3 className="title" style={{ textAlign: "center" }}>
  //                   Program Jati Sejahtera
  //                 </h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div data-aos="flip-up" className="col-md-3 col-sm-6">
  //             <div className="box15">
  //               <img src={Santunan} style={{ height: "10rem" }} alt="" />
  //               <div className="box-content">
  //                 <h3 className="title" style={{ textAlign: "center" }}>
  //                   Santunan Yatim Piatu
  //                 </h3>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Footer />
  //   </motion.div>
  // );
};

const bannerHome = {
  backgroundImage: `url(${TopBanner})`,
  backgroundSize: "100%",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  backgroundColor: "d3dae2",
};

const program = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  marginTop: "60em",
};

const programTitle = {
  textAlign: "center",
  fontWeight: "bolder",
  marginTop: -170,
  marginBottom: 100,
  fontSize: 40,
  color: "black",
};