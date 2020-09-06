import React from "react";
import { motion } from "framer-motion";
// import { IoIosLogOut } from "react-icons/io";
import { Button } from "react-bootstrap";

export default () => {
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
      <div className="wrapper fadeInDown ">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Login</h1>
          </div>
          <form>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
            <div style={{ marginTop: "3%", marginBottom: "3%", marginLeft: "7%", marginRight: "7%" }}>
              <Button className="fadeIn fourth" block>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
