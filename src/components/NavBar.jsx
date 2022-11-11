import React from "react";
import "./navbar.css";
import {
  AppBar,
  Typography,
  Button,
  Box,
  CssBaseline,
  List,
} from "@mui/material";

const NavBar = () => {

  function goToProblem(){
    window.scrollTo(0,755);
  }

  function goToSolution(){
    window.scrollTo(0,1550);
  }

  function goToModule(){
    window.scrollTo(0,2385);
  }

  function goToTeam(){
    window.scrollTo(0,4000);
  }

  return (
    <div className = "container_nb">
      <div className = "innerCon">
      <div className="button_div"><button className = "button_nb" onClick={goToProblem}>Problem</button></div>
      <button className = "button_nb" onClick={goToSolution}>Solution</button>
      <button className = "button_nb" onClick={goToModule}>Module</button>
      <button className = "button_nb" onClick={goToTeam}>Team</button>
      </div>
      <button className = "con_button_nb"><a href = "https://mail.google.com/mail/?view=cm&fs=1&to=harsh.singh2020@vitbhopal.ac.in" className="a_link">Contact Us</a></button>
    </div>
  );
};

export default NavBar;
