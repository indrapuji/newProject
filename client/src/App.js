import React from "react";
import {
  Berita,
  Contact,
  Galery,
  Home,
  About,
  Visi,
  Cabang,
  Sejarah,
  Pendidikan,
  Sosial,
  Perumahan,
  Kesehatan
} from "./pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile/about">
          <About />
        </Route>
        <Route exact path="/profile/visi">
          <Visi />
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
    </>
  );
}

export default App;
