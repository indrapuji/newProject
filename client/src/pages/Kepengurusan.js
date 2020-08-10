import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
// import pengurus from "../assets/image/pengurus.png";
import { motion } from "framer-motion";
import Ekowahyudi from "../assets/pengurus/ekowahyudi.jpg";

export default () => {
  const pageTransition = {
    init: {
      x: -300,
    },
    in: {
      x: 0,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, marginTop: -20 }}>
            Susunan Pembina, Pengawas, dan Pengurus YKP3 Jatisejahtera
          </p>
        </div>
        <div class="container">
          <ul class="timeline">
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Eko Wahyudi, SH, M,SI</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Ketua
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Ir.Sadhardjo Siswamartana, MSc.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Anggota
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Ir.Eddy Djanad, MM.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Anggota
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Darmoko, SE.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Ketua
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Arif Rachmadi, SE.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Anggota
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Tuti Harnani, SH.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Anggota
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Drs.Triyuwono, MM.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Ketua
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Ir. Sri Murtiningsih,MM.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Bendahara
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Ir. Djoko Sukrisno R. MSc.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Sekretaris Umum
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Dra, Endang Setyowati</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Sekretaris 1
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Soedarjo, SE,MM.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Ketua
                    </small>
                  </p>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Divre I Jawa Tengah
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Rizal Moenadi, SE, M,SI</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Sekretaris
                    </small>
                  </p>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Divre I Jawa Tengah
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Drs.M.Kusyuniardi,MM.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Ketua
                    </small>
                  </p>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Divre II Jawa Timur
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">M.Arifin, SE, MM.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Ketua
                    </small>
                  </p>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Sekretaris & Bendahara Divre II Jawa
                      Timur
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-badge">
                <i class="glyphicon glyphicon-check"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">Ir.HR.Iskandar S.,MM.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Ketua
                    </small>
                  </p>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Divre III Jawa Barat
                    </small>
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-badge warning">
                <i class="glyphicon glyphicon-credit-card"></i>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <Image src={Ekowahyudi} rounded style={{ height: 150, width: 100 }} />
                  <h4 class="timeline-title">R.Waluyo Hartono.</h4>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Sekretaris
                    </small>
                  </p>
                  <p>
                    <small class="text-muted">
                      <i class="glyphicon glyphicon-time"></i>Divre III Jawa Barat
                    </small>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
