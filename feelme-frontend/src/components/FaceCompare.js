import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BlockComponent.css'

function FaceCompare(props) {
    const menu = ['Home', 'Settings']
    const [pic1, setPic1] = useState("")
    const [pic2, setPic2] = useState("")
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    // Handling file one loading
    const pic1Click = () => {
        // 👇️ open file input box on click of other element
        inputRef1.current.click();
      };
    
      const handlePic1Change = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
        event.target.value = null;
        setPic1(fileObj.name)
    }
    // Handling second file loading
    const pic2Click = () => {
        // 👇️ open file input box on click of other element
        inputRef2.current.click();
      };
    
      const handlePic2Change = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
        event.target.value = null;
        setPic2(fileObj.name)
    }

    const handleSubmit= async (event)=>{ 
        const selectedFiles = { pic1: pic1, pic2: pic2 };
        const response = await fetch("/verify", {
        method: "POST",
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify(selectedFiles)
        }).then(res => res.json()).then(data => {
            if(data.result){
                alert("They are the same");
            }
            else {
                alert("Not the same")
            }
        });

    }


    return (<>
                <Row className="menuRow text-center">
                    <Col>
                    <input
                        style={{display: 'none'}}
                        ref={inputRef1}
                        type="file"
                        onChange={handlePic1Change}
                    />
                        <Button variant="light" onClick={pic1Click}>Picture 1</Button>
                    </Col>
                    <Col>
                        <input
                        style={{display: 'none'}}
                        ref={inputRef2}
                        type="file"
                        onChange={handlePic2Change}
                        />
                        <Button variant="light" onClick={pic2Click}>Picture 2</Button>
                    </Col>
                </Row>
                <Row className="menuRow text-center">
                    <Col>
                        <Button variant='outline-primary' onClick={handleSubmit}>Compare</Button>
                    </Col>
                </Row>
            </>
                         
    );
  }

export default FaceCompare;
