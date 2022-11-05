import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BlockComponent.css'
import Nav from 'react-bootstrap/Nav';

function BlockComponent(props) {
    const menu = ['Home', 'Seetings']
    const [filename, setFilename] = useState("")
    const inputRef = useRef(null);
    const pic1Click = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
      };
    
      const handlePic1Change = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
        }
        event.target.value = null;
        setFilename(fileObj.name)
    }


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
                        // menu type
                        (props.type == "action") ? (
                                <Row className="menuRow">
                                    <Col>
                                    <input
                                        style={{display: 'none'}}
                                        ref={inputRef}
                                        type="file"
                                        onChange={handlePic1Change}
                                    />
                                        <Button variant="light" onClick={pic1Click}>pic1</Button>
                                    </Col>
                                    <Col>
                                        <input
                                        style={{display: 'none'}}
                                        ref={inputRef}
                                        type="file"
                                        onChange={handlePic1Change}
                                        />
                                        <Button variant="light" onClick={()=>alert(filename)}>pic2</Button>
                                    </Col>
                                </Row>
                            
                        ):("")
                    }
                    {
                    // action type
                    (props.type == "action") ? (          
                        <Button variant="link">Go</Button>
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
                    {
                    // action type
                    (props.type == "action") ? (          
                        <Button variant="link">Go</Button>
                    ):("")
                }
            </Card.Body>
        </Card>
    );
  }

export default BlockComponent;
