import React, { useState, useEffect } from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import BlockComponent from '../components/BlockComponent';
// CSS and graphics
import "./Main.css";
import profilePic from '../assets/profile.jpg';
import introPic from '../assets/intro.jpg';
import verifyPic from '../assets/verify.jpg';
import emotionPic from '../assets/emotion.jpg';

function Main() {
  // Getting data to different component
  const [feelings, setFeelings] = useState({})
  function handleFeelings (value) {
      setFeelings(value);
  }
  return (
    // Main Page Layout
    <Container className="rowSpace pageContainer">
      <Row className="rowSpace">
        <Col className="block cardContainer logoContainer" xs="12" lg="3">
          <img src={introPic} className="d-inline mr-2 mt-4 logoPic"></img>
          <h3 className='d-inline align-middle'>FeelMe</h3>
        </Col>
     
      </Row>
      <Row className="rowSpace menu">
        <Col className="block menu" lg="3">
          <BlockComponent title="Menu" description="" type="menu" />
        </Col>
        <Col lg="9">
          <Row>
            <Col className="block" lg="8">
            <BlockComponent title="Introduction" url={introPic} description="FeelMe is an AI based platform designed to answer your human questions. It was created to 
            gain insights on human interactions, for learning and self reflection." type="intro" />
            </Col>
            <Col className="block" lg="4">
            <BlockComponent title="Good Morning" description="Welcome back, Itay." url={profilePic} type="profile" />
            </Col>
          </Row>
          <Row className="rowSpace">
            <Col className="block">
              <BlockComponent title="Image Feeling Recognition" feelings={handleFeelings} url={emotionPic} description="Emotion analysis of a picture." type="emotion" />
            </Col>
          </Row>
          <Row className="rowSpace">
            <Col className="block">
              <BlockComponent title="Comparing Faces" url={verifyPic} description="Make sure you know who that one person you saw is." type="faceVerification" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="rowSpace">
        <Col className="mb-4">
          <BlockComponent title="" description={""}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
