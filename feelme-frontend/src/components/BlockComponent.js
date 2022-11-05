import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BlockComponent.css'
import FaceCompare from './FaceCompare';
import EmotionRecognition from './EmotionRecognition';
import RealTimeEmotion from './RealTimeEmotion';

function BlockComponent(props) {
    const menu = ['Home', 'Settings']

    return (
        <Card border="light" className="cardContainer">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {
                        <Row>
                            <Col>
                                {props.description}
                            </Col>
                        </Row>
                    }
                    {
                        // Adding Buttons by type
                        // face compare type
                        (props.type == "faceVerification") ? (
                            <FaceCompare />    
                        ):("")
                    }
                    {
                        //  emotion type
                        props.type == 'emotion'? (
                            <EmotionRecognition />
                        ):
                        ("")
                    }

                    {
                        props.type == 'realtime'? (
                            <RealTimeEmotion />
                        ):("")
                    }
                </Card.Text>
                {
                    // Adding Buttons by type
                    // menu type
                    (props.type == "menu") ? (
                        menu.map((item, idx) => {
                            return(
                            <Row key={idx} className="menuRow">
                                <Col>
                                    <Button variant="light">{item}</Button>
                                </Col>
                            </Row>
                            )                        
                        })
                    ):("")}
                    {
                    // intro type
                    (props.type == "intro") ? (
                        <Button variant="outline-primary">Learn more</Button>
                    ):("")
                    }
            </Card.Body>
        </Card>
    );
  }

export default BlockComponent;
