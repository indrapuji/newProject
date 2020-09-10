import React from "react";
import { Berita, Contact, Galery, Home, About, Kepengurusan, Cabang, Sejarah, Pendidikan, Sosial, Perumahan, Kesehatan, Update, Realisasi, Profile, Claim, FormLogin } from "./pages";
import { ClaimKematian, ClaimKesehatan, ClaimManfaat, ClaimPendidikan, ClaimPerumahan } from "./pages/claimPage";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile/about">
            <About />
          </Route>
          <Route exact path="/profile/kepengurusan">
            <Kepengurusan />
          </Route>
          <Route exact path="/profile/cabang">
            <Cabang />
          </Route>
          <Route exact path="/profile/sejarah">
            <Sejarah />
          </Route>
          <Route exact path="/program/pendidikan">
            <Pendidikan />
          </Route>
          <Route exact path="/program/sosial">
            <Sosial />
          </Route>
          <Route exact path="/program/perumahan">
            <Perumahan />
          </Route>
          <Route exact path="/program/kesehatan">
            <Kesehatan />
          </Route>
          <Route exact path="/data/update">
            <Update />
          </Route>
          <Route exact path="/data/realisasi">
            <Realisasi />
          </Route>
          <Route exact path="/data/claim">
            <Claim />
          </Route>
          <Route exact path="/claim/kematian">
            <ClaimKematian />
          </Route>
          <Route exact path="/claim/Kesehatan">
            <ClaimKesehatan />
          </Route>
          <Route exact path="/claim/manfaat">
            <ClaimManfaat />
          </Route>
          <Route exact path="/claim/pendidikan">
            <ClaimPendidikan />
          </Route>
          <Route exact path="/claim/perumahan">
            <ClaimPerumahan />
          </Route>
          <Route path="/berita">
            <Berita />
          </Route>
          <Route path="/galery">
            <Galery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <FormLogin />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
