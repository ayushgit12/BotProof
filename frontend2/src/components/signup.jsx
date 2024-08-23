import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ParticlesBg from "particles-bg";
import axios from "axios";
// import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
// import { AnimatePresence } from "framer-motion";

const allowedDomainExtensions = [".com", ".in", ".edu", ".org", ".net", ".gov"];

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [domainError, setDomainError] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  // const toast = useToast();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const isValidDomainExtension = (email) => {
    return allowedDomainExtensions.some((extension) =>
      email.endsWith(extension)
    );
  };

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setFormData({ ...formData, email: emailInput });

    if (!isValidDomainExtension(emailInput)) {
      setDomainError("Email domain extension is not allowed");
    } else {
      setDomainError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("password and confirmPassword do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMsg(response.data.mssg);
      toast.success("registration succesful!!");
      console.log("success");

      toggleForm();
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("registration failed ! please try again !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#053d48",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ParticlesBg
        type="circle"
        bg={{ zIndex: 0, position: "absolute", top: 0 }}
      />
      <Toaster />
      <div
        style={{
          background:
            "linear-gradient(to right, rgb(25, 60, 71), rgb(80, 140, 85), rgb(25, 60, 71))",
          width: "600px",
          height: "320px",
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontWeight: "500",
              fontSize: "20px",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              marginRight: "40px",
            }}
          >
            <p>Have an account?</p>
            <div
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                width: "90px",
                padding: "10px 15px",
                border: "1px solid white",
                fontSize: "16px",
                opacity: 1,
                textAlign: "center",
              }}
              onClick={toggleForm}
            >
              Log In
            </div>
          </div>
          <div
            style={{
              height: "auto",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: 0,
              bottom: "30px",
            }}
          ></div>
          <div
            style={{
              color: "white",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontWeight: "500",
              fontSize: "20px",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              marginLeft: "40px",
            }}
          >
            <p className="text-3xl mb-3">Don't have an account?</p>
            <div
              className="rounded-xl"
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                width: "90px",
                padding: "10px 12px",
                border: "1px solid white",
                fontSize: "16px",
                opacity: 1,
                textAlign: "center",
              }}
              onClick={toggleForm}
            >
              Sign Up
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: isSignUp ? "275px" : "25px",
            backgroundColor: "white",
            height: "380px",
            width: "305px",
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "absolute",
            transition: "margin-left 1.5s",
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: 0,
              top: "-75px",
            }}
          ></div>
          <div
            style={{
              zIndex: 2,
              position: "relative",
              paddingBottom: "5px",
              height: "1100px",
            }}
          >
            <div className="flex justify-center mt-20">
              <img
                className="animate-bounce"
                src="https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg?semt=ais_hybrid"
                alt="Bot"
                style={{
                  width: "75px",
                  height: "auto",
                  visibility: "visible",
                  position: "absolute",
                  top: "22px",
                }}
              />
            </div>
            <form
              style={{
                display: isSignUp ? "none" : "block",
                marginTop: "30px",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                onChange={handleEmailChange}
                value={formData.email}
                variant="outlined"
                error={!!domainError}
                helperText={domainError}
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
              />
              <FormControl
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirm-password"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#053d48",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <form
              style={{
                display: isSignUp ? "block" : "none",
                marginTop: "30px",
              }}
            >
              <TextField
                id="outlined-basic2"
                label="Email"
                name="email"
                onChange={handleEmailChange}
                value={formData.email}
                variant="outlined"
                error={!!domainError}
                helperText={domainError}
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
              />
              <FormControl
                sx={{
                  m: 1,
                  width: "250px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "25px",
                  marginRight: "5px",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password2">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password2"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div className="flex justify-center">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#053d48",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  {loading ? "Logging In..." : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;