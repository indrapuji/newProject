import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { IoIosLogOut } from "react-icons/io";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import host from '../hooks/host';

export default () => {
  // const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";
  // const host = "http://128.199.238.147:3001";

  const history = useHistory();
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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const onFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: `${host}/users/login/admin`,
        data: formData,
      });
      console.log(data);
      localStorage.setItem('token', data.access_token);
      console.log(data.access_token);
      history.push('/');
    } catch (err) {
      let msg = '';
      if (err.response) {
        if (Array.isArray(err.response.data.msg)) {
          msg = err.response.data.msg.join('<br>');
        } else {
          msg = err.response.data.msg;
        }
      } else if (err.request) {
        msg = err.request;
      } else {
        msg = err.message;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: `${msg}`,
      });
    }
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <div className="wrapper fadeInDown ">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Login</h1>
          </div>
          <form onSubmit={onFormSubmit}>
            <input type="text" id="login" className="fadeIn second textInput" name="email" placeholder="email" onChange={onFormChange} />
            <input type="password" id="password" className="fadeIn third textInput" name="password" placeholder="password" onChange={onFormChange} />
            <div style={{ marginTop: '3%', marginBottom: '3%', marginLeft: '7%', marginRight: '7%' }}>
              <Button className="fadeIn fourth" block type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
