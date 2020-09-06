import React, { useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home, Detail, FormLogin } from "./pages";
import "./App.css";

function App() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.token) history.push("/login");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:dataId">
            <Detail />
          </Route>
          <Route exact path="/login">
            <FormLogin />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
