import React, { useState, useEffect, useRef } from 'react';
// Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// CSS and graphics
import './BlockComponent.css'
// Components
import FaceCompare from './FaceCompare';
import EmotionRecognition from './EmotionRecognition';
import DoughnutComponent from './DoughnutComponent';
import VerifiedComponent from './VerifiedComponent';

function BlockComponent(props) {
    // Menu items
    const menu = ['Home', 'Feeling Recognition', 'Comparing Faces']
    // Handling and passing data to different components
    const [feelings, setFeelings] = useState({});
    const [renderFeelings, setRenderFeelings] = useState(false)
    const [compare, setCompare] = useState({});
    const [renderCompare, setRenderCompare] = useState(false)
    useEffect(()=>{
        if(Object.keys(feelings).length !== 0) {
            setRenderFeelings(true)
        }
        if(Object.keys(compare).length !== 0) {
            setRenderCompare(true)
        }
    },[feelings, renderFeelings, compare, renderCompare]);

    function handleFeelings (value) {
        setFeelings(value);
    }
    function handleCompare (value) {
        setCompare({result:value.result, similar:value.similar, different:value.different});
    }

    return (
        <Card border="light" className={props.type == "menu" ? ("cardContainer menu"):('cardContainer')}>
            <Row>
                <Col lg={renderFeelings||renderCompare?(6):(12)}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <img className='profilePic' src={props.url}></img>
                            </Col>
                        </Row>                        
                    <Card.Title>{props.title}</Card.Title>
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
                            <FaceCompare compare={handleCompare} />    
                        ):("")
                    }
                    {
                        //  emotion type
                        (props.type == 'emotion')? (
                            <EmotionRecognition lg="6" feelings={handleFeelings} />
                        ):
                        ("")
                    }
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
                    ):("")
                    }       
                    </Card.Body>
                </Col>
                <Col lg="6">
                    {   
                        renderFeelings ?
                            <Col className="mt-4" lg="9">
                                <DoughnutComponent data={feelings} />
                            </Col>:""
                    }
                    {
                        renderCompare ? 
                            <Col className="mt-4 mb-4" lg="9">
                                <h3>{(compare.result)?(<p>Same Person</p>):(<p>Not the same person</p>)}</h3>
                                <VerifiedComponent data={compare} />
                            </Col>:""
                    }
                </Col>
            </Row>
        </Card>
    );
  }

export default BlockComponent;
