import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { Login, Home, Berita, Galeri, Kesehatan, Pendidikan, Perumahan, Pesan, Realisasi, Sosial } from "./pages";

function App() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.token) history.push("/login")
  }, [history]);

  return (
    <>
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
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
