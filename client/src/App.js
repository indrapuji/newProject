import React from "react";
import {
  Berita,
  Contact,
  Galery,
  Home,
  About,
  Kepengurusan,
  Cabang,
  Sejarah,
  Pendidikan,
  Sosial,
  Perumahan,
  Kesehatan,
  Update,
  Realisasi
} from "./pages";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
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
            <Realisasi/>
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
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
