import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home, Detail, FormLogin } from "./pages";

function App() {
  const location = useLocation();
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
