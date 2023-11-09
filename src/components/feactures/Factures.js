import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './factures.css';
const factures = () => {
  return (
    <div className='factures_main'>
        <Container>
                <Row className='mb-5'>
                        <Col lg= {12} className='text-center'>
                        <div className='head_text'>
                                <p>FACTURES</p>
                                <h2>
                                Why Choose Us 
                                </h2>
                        </div>

                        </Col>
                </Row>
                <Row>
                        <Col lg= {8}>
                               <div className='factures_content'>
            <h2>Experienced Staff</h2>
                <div className="Fectures_text">
                    <p>Donec eget ultricies sapi . sed porttitor , mauris ater lob facilisis , elit sapie eleifend ligula.</p>
                </div>
            <h2>Per Boking Online</h2>
                <div className="Fectures_text">
                    <p>Donec eget ultricies sapi . sed porttitor , mauris ater lob facilisis , elit sapie eleifend ligula.</p>
                </div>
            <h2>Affordble cost</h2>
                <div className="Fectures_text">
                    <p>Donec eget ultricies sapi . sed porttitor , mauris ater lob facilisis , elit sapie eleifend ligula.</p>
                </div>
        </div>
                        </Col>
                        <Col lg= {4}>
                                <div className='factures_img text-end'>
                        <img className='w-100' src='images/barber-man.jpg' alt='barber'/>

                                </div>
                        </Col>
                </Row>
        </Container>

    </div>
  )
}

export default factures