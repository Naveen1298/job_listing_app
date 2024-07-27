import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { LOGIN_API } from "../../utils/api";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logFail, setLogFail] = React.useState(0);
  const [logIn, setLogIn] = React.useState(0);
  const navigate = useNavigate();

  const data = {
    username: username,
    password: password,
  };

  const validateLogin = () => {
    console.log(logIn);
    axios
      .post(LOGIN_API, {
        email: data.username,
        password: data.password,
      })
      .then((res) => {
        if (res.data.status === "fail") {
          setLogFail(1);
          setLogIn(0);
        }

        if (res.data === "") {
          console.log(" Login Successfull ");
          setLogFail(0);
          setLogIn(1);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        id="login-box"
        component="form"
        sx={{ m: 1, width: "25ch" }}
        className=""
      >
        <Stack spacing={2} className="form">
          <h2 className="title">Login</h2>
          <TextField
            id="username"
            label="username"
            variant="outlined"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
          />
          <TextField
            id="password"
            label="password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <Button
            variant="contained"
            onClick={() => {
              validateLogin(data);
            }}
          >
            LOGIN
          </Button>
        </Stack>
      </Box>
      <br />
      {logFail === 1 ? (
        <div>Login Failed. Please Check Credentials...</div>
      ) : (
        ""
      )}
      <br />
      <div className={StyleSheet.footer}>
        <h4>
          Created By :{" "}
          <a
            href="https://www.linkedin.com/in/naveen-kumar-alapati-0828aa199"
            className={StyleSheet.author}
          >
            Naveen Alapati
          </a>{" "}
          | alapatinaveen18@gmail.com
        </h4>
      </div>
    </>
  );
}

//https://www.linkedin.com/in/naveen-kumar-alapati-0828aa199
