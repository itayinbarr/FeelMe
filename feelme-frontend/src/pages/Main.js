import React, { useState, useEffect } from 'react';
import "./Main.css";
// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlockComponent from '../components/BlockComponent';


function Main() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    // Main Page Layout
    <Container className="rowSpace pageContainer">
      <Row className="rowSpace">
        <Col className="block" xs="12" lg="3">
          <h3>logo</h3>
        </Col>
      </Row>
      <Row className="rowSpace menu">
        <Col className="block menu" lg="3">
          <BlockComponent title="Menu" description="" type="menu" />
        </Col>
        <Col lg="9">
          <Row>
            <Col className="block" lg="8">
            <BlockComponent title="Introduction" description="" type="intro" />
            </Col>
            <Col className="block" lg="4">
            <BlockComponent title="Profile" description="" type="info" />
            </Col>
          </Row>
          <Row className="rowSpace">
            <Col className="block" lg="4">
              <BlockComponent title="Image Feeling Recognition" description="" type="action" />
            </Col>
            <Col className="block" lg="4">
              <BlockComponent title="Face Verification" description="" type="action" />
            </Col>
            <Col className="block" lg="4">
              <BlockComponent title="Real Time Feeling Recognition" description="" type="action" />
            </Col>
          </Row>
          <Row className="rowSpace">
            <Col lg="6">
              <BlockComponent title="Data" description="" />
            </Col>
            <Col lg="6">
              <BlockComponent title="Data" description="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
