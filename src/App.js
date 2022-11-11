import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import Image from "./components/images/HeroBg.png";
import { Box, Paper, Container } from "@mui/material";
import Below_Nav from "./components/Below_Nav";
import Problem_Statement from "./components/Problem_Statement";
import Solution from "./components/Solution";
import Modules from "./components/Modules";
import Members from "./components/Members";
import Footer from "./components/Footer";

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundColor : "#010415",
      backgroundRepeat : "none",
      resizeMode: 'stretch',
      alignItems: 'stretch',
      height : "775px"
  }
};

function App() {
  return (
    <div style = {{scrollBehavior : "smooth"}}>

    <Box>
      <Box style = {styles.paperContainer}>
        <NavBar></NavBar>
        <Below_Nav></Below_Nav>
      </Box>
      <Problem_Statement></Problem_Statement>
      <Solution></Solution>
      <Modules></Modules>
      <Members></Members>
      <Footer></Footer>
    </Box>
    </div>
  );
}

export default App;
