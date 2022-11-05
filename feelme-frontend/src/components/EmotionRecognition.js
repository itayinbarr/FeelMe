import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BlockComponent.css'

function EmotionRecognition(props) {
    const menu = ['Home', 'Settings']
    const [pic1, setPic1] = useState("")
    const inputRef1 = useRef(null);

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

    const handleSubmit= async (event)=>{ 
        const selectedFiles = { pic: pic1};
        const response = await fetch("/emotion", {
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
                    <input
                        style={{display: 'none'}}
                        ref={inputRef1}
                        type="file"
                        onChange={handlePic1Change}
                    />
                        <Button variant="light" onClick={pic1Click}>Picture 1</Button>
                    </Col>
                </Row>
                <Row className="menuRow text-center">
                    <Col>
                        <Button variant='outline-primary' onClick={handleSubmit}>Analyze</Button>
                    </Col>
                </Row>
            </>
                         
    );
  }

export default EmotionRecognition;
