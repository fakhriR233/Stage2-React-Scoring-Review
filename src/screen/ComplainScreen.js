import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ComplainMain from '../components/Complain/ComplainMain';
import ComplainSide from '../components/Complain/ComplainSide';


const ComplainScreen = () => {
  return (
    <div>
        <Header/>
        <Container fluid className='mx-auto text-center'>
            <Row>
                <Col className='ms-5'>
                    <ComplainSide />
                </Col>
                <Col xs={9}>
                    <ComplainMain />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ComplainScreen