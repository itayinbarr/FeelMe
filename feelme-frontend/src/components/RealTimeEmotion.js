import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BlockComponent.css'

function RealTimeEmotion(props) {
    const handleSubmit= async (event)=>{ 
        const selectedFiles = { pic: "lol"};
        const response = await fetch("/realtime", {
        method: "POST",
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(selectedFiles)
        }).then(res => res.json()).then(data => {
            if(data){
                alert(JSON.stringify(data.result))
            }
            else {
            }
        });

    }


    return (<>
                <Row className="menuRow text-center">
                    <Col>
                        <Button variant='outline-primary' onClick={handleSubmit}>Begin</Button>
                    </Col>
                </Row>
            </>
                         
    );
  }

export default RealTimeEmotion;
