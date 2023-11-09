import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './testimonial.css'
const Testimonial = () => {
  return (
    <div className='testimonial'>
        <Container>
                <Row>
                        <Col lg={12} className='text-center'>
                        <div className='head_text'>
                                <p>TESTIMONIAL</p>
                                <h2>
                                What Client Says
                                </h2>
                        </div>
                        </Col>
                </Row>

                <Row className='mt-5'>
                        <Col lg={4}>
                        <div className="Testimonial_clo">
                    <div className="user">
                    <img src='images/img-1.jpg' alt='barber'/>
                      
                        <div className="user_info">
                            <h4>KEN NORMAN</h4>
                            <small>@kennorman</small>
                        </div>
                    </div>
                    <p>Donce eget ultricies saip . sed porttitor , mauris ater lob facilisis, elit sapie eleifend ligula. Donce eget ultricies saip . Donce eget ultricies saip . sed porttitor , mauris ater lob facilisis, </p>
                </div>
                        </Col>
                        <Col lg={4}>
                        <div className="Testimonial_clo">
                    <div className="user">
                    <img src='images/img-2.jpg' alt='barber'/>
                      
                        <div className="user_info">
                            <h4>KEN NORMAN</h4>
                            <small>@kennorman</small>
                        </div>
                    </div>
                    <p>Donce eget ultricies saip . sed porttitor , mauris ater lob facilisis, elit sapie eleifend ligula. Donce eget ultricies saip . Donce eget ultricies saip . sed porttitor , mauris ater lob facilisis, </p>
                </div>
                        </Col>
                        <Col lg={4}>
                        <div className="Testimonial_clo">
                    <div className="user">
                    <img src='images/img-3.jpg' alt='barber'/>
                      
                        <div className="user_info">
                            <h4>KEN NORMAN</h4>
                            <small>@kennorman</small>
                        </div>
                    </div>
                    <p>Donce eget ultricies saip . sed porttitor , mauris ater lob facilisis, elit sapie eleifend ligula. Donce eget ultricies saip . Donce eget ultricies saip . sed porttitor , mauris ater lob facilisis, </p>
                </div>
                        </Col>
                </Row>
        </Container>
    </div>
  )
}

export default Testimonial