import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './banner.css';
const Banner = () => {
  return ( 
        <div id='home'>                         
                <Container>
                        <Row>
                        <Col lg= {12} className="banner_text text-center">
                                <h2>Heir Studio</h2>
                                <p>Style Your Heir Is Style Your Life</p>
                                <div className='bna_btn mt-5'>
                                <a href="#"><span></span> Find Out</a>
                                <a href="#"> <span></span> Read More</a>
                                </div>
                        </Col>
                        </Row>
                </Container>
        </div>
  )
}

export default Banner