import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <Container>
        <Row>
                <Col lg={12} className='text-center'>
                <div className='head_text'>
                                <p>FACTURES</p>
                                <h2>
                                Why Choose Us 
                                </h2>
                        </div>
                </Col>
        </Row>
        <Row>
                <Col lg={3} >
                <div className="footer_left">
                    <h2>Opening Hours</h2>
                    <p>Saturday sunday - 8am to 11pm </p>
                    <p>Monday Friday - 9am to 9pm </p>
                </div>
                </Col>
                <Col lg={6}>
                        <div className='footer_img'>
                        <img className='w-100' src='images/footer-img.png' alt='barber'/>
                            
                        </div>
                </Col>
                <Col lg={3} >
                <div class="footer_right">
                    <h2>Get In Touch</h2>
                    <p>#30 abc colony , xyz city IN</p>
                    <p>example@website.com</p>
                    <p>+01 123456789</p>
                </div>
                </Col>
        </Row>
        <Row>
                <Col lg={12} className='text-center'>
                <div className="social_links">
                <p>Copyright : sohrab Hossain</p>

            </div>
                </Col>
        </Row>
        </Container>


    </div>
  )
}

export default Footer