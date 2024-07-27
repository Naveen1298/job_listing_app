import React from "react";
import JobNav from "../JobNav/JobNav";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login");
  };
  return (
    <>
      <JobNav />
      {/* <JobCard /> */}
      <div>
        <Button
          variant="contained"
          onClick={() => {
            logOut();
          }}
        >
          LOG OUT
        </Button>
      </div>
    </>
  );
};

export default Home;
