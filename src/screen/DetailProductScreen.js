import React from 'react'
import DetailImage from '../components/ProductDetail/DetailImage'
import DetailDesc from '../components/ProductDetail/DetailDesc'
import Header from '../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const DetailProductScreen = () => {
  return (
    <div>
        <Header/>
            <Container className="d-flex p-3 mx-auto mt-5 w-100">
                <Row className='justify-content-md-center'>
                    <Col xs lg="5">
                        <div>
                            <DetailImage/>
                        </div>
                    </Col>
                    <Col xs lg="5">
                        <div style={{height: "555px"}}>
                            <DetailDesc/>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default DetailProductScreen