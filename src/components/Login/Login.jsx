import React, { useState } from "react";
import {
  Button,
  TextField,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
// import { BRAND_NAME } from "../constants";

import "./styles.css";
import { LoginService } from "../../services/Login.service/LoginService";
import { useHistory } from "react-router-dom";
// import useStyles from "./styles";

const Login = () => {
  const [login, setlogin] = useState({
    username: "",
    password: "",
    message: "",
    open: false,
  });

  const history = useHistory();

  const setUsername = (event) => {
    setlogin({ ...login, username: event.target.value });
  };

  const setPassword = (event) => {
    setlogin({ ...login, password: event.target.value });
  };

  const signIn = () => {
    if (login.username && login.password) {
      LoginService(login.username, login.password).then((response) => {
        if (response?.respStatus) {
          setlogin({
            ...login,
            open: true,
            message: "You have successfully Logged In!",
          });

          localStorage.setItem("token", response.accessToken);
          
          history.push("/dashboard");
        } else {
          setlogin({
            ...login,
            open: true,
            message: "Incorrect Username or Password!",
          });
        }
      });
    }
  };

  const handleClose = () => {
    setlogin({ ...login, open: false });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Login">
          <TextField
            variant="standard"
            placeholder="Username"
            margin="normal"
            required
            onChange={setUsername}
            value={login.username}
          />
          <TextField
            variant="standard"
            placeholder="Password"
            margin="normal"
            required
            type="password"
            onChange={setPassword}
            value={login.password}
          />

          <div className="Button">
            <Button variant="contained" color="primary" onClick={signIn}>
              Log In
            </Button>
          </div>
        </div>
        <Dialog
          open={login.open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {login.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </header>
    </div>
  );
};

export default Login;
