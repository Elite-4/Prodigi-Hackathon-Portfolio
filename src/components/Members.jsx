import React from 'react';
import "./style.css";

const Members = () => {
  return (
    <div className='memberSection'>

    <div className="image-section">
    <h1 className="heading">Team</h1>
    <p className="intro">We are a team of 4 from multi-displinary domain.</p>

    <div class="Member V">
        <img src={require("./images/Vedant.png")} alt="" srcset="" class="Harsh" />
      <p class="name">Vedant Kutemate</p>
      <p class="work">UI/UX Designer</p>
      <a href="https://www.linkedin.com/in/vedant-kutemate-4336601b2/"><img class="image" src={require("./images/icons8-linkedin-32.png")} alt="linkedin icon"/></a>
    </div>

    <div class="Member N">
      <img class="Harsh" src={require("./images/Naivaidya.png")} alt="Harsh image"/>
      <p class="name">Naivaidya Yadav</p>
      <p class="work">Web Developer</p>
      <a href="https://www.linkedin.com/in/naivaidya-yadav-0179b7200/"><img class="image" src={require("./images/icons8-linkedin-32.png")} alt="linkedin icon"/></a>
    </div>

    <div class="Member H">
      <img class="Harsh" src={require("./images/Harsh.png")} alt="Harsh image"/>
      <p class="name">Harsh Vardhan Singh</p>
      <p class="work">Data Analyst</p>
      <a href="https://linkedin.com/in/harsh-vardhan-singh-9a1563219"><img class="image" src={require("./images/icons8-linkedin-32.png")} alt="linkedin icon"/></a>
    </div>

    <div class="Member S">
      <img class="Harsh" src={require("./images/Shashank.png")} alt="Harsh image"/>
      <p class="name">Shashank Sanket</p>
      <p class="work">Python Developer</p>
      <a href="https://www.linkedin.com/in/shashank-sanket-89b30b209/"><img class="image" src={require("./images/icons8-linkedin-32.png")} alt="linkedin icon"/></a>
    </div>
  </div>
</div>
  )
}

export default Members
