import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './service.css';
const Service = () => {
  return (
    <div className='service'>
        <Container>
                <Row>
                       <Col lg= {12} className='text-center'>
                        <div className='head_text'>
                                <p>SERVICES</p>
                                <h2>
                                We Provide Better
                                </h2>
                        </div>

                        </Col>
                </Row>

                <Row className='mt-5'>
                        <Col lg= {6}>
                        <div className="singel_service">
                                <img src="images/pic-1.jpg" alt='pic'/>
                                
                    
                    <div className="overlay"></div>
                    <div className="service_desc">
                        <h3>Hair Styling </h3>
                        <hr/>
                        <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                    </div>
                </div>
                        </Col>
                        <Col lg= {6}>
                        <div className="singel_service">
                                <img src="images/pic-2.jpg" alt='pic'/>
                                
                    
                    <div className="overlay"></div>
                    <div className="service_desc">
                        <h3>Hair Styling </h3>
                        <hr/>
                        <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                    </div>
                </div>
                        </Col>
                        <Col lg= {6}>
                        <div className="singel_service">
                                <img src="images/pic-3.jpg" alt='pic'/>
                                
                    
                    <div className="overlay"></div>
                    <div className="service_desc">
                        <h3>Hair Styling </h3>
                        <hr/>
                        <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                    </div>
                </div>
                        </Col>
                        <Col lg= {6}>
                        <div className="singel_service">
                                <img src="images/pic-4.jpg" alt='pic'/>
                                
                    
                    <div className="overlay"></div>
                    <div className="service_desc">
                        <h3>Hair Styling </h3>
                        <hr/>
                        <p>this is test under description of barber foundation this is test under description of barber foundation.</p>
                    </div>
                </div>
                        </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Service