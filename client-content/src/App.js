import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Berita, Galeri, Kesehatan, Pendidikan, Perumahan, Pesan, Realisasi, Sosial } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/berita" component={Berita} />
          <Route path="/galeri" component={Galeri} />
          <Route path="/kesehatan" component={Kesehatan} />
          <Route path="/pendidikan" component={Pendidikan} />
          <Route path="/perumahan" component={Perumahan} />
          <Route path="/pesan" component={Pesan} />
          <Route path="/realisasi" component={Realisasi} />
          <Route path="/sosial" component={Sosial} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
