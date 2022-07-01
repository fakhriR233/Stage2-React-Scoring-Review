import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import mouse from '../../assets/images/viper-mini.jpg'
import Container from 'react-bootstrap/Container'

const HomeScreenBody = () => {
  return (
    <div>
        <Container fluid className='p-3 mx-5'>
            <Card.Title style={Styles.Title}>Product</Card.Title>
            <Row xs={1} md={2} className="g-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col style={Styles.CardCol}>
                    <Card style={Styles.CardBody}>
                        <Card.Img variant="top" src={mouse} style={Styles.CardImg}/>
                        <Card.Body>
                        <Card.Title style={{color:'#F74D4D'}}>Card title</Card.Title>
                        <Card.Text>
                            Rp.700.000,-
                        </Card.Text>
                        <Card.Text className="mt-0">
                            Stock : 600
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

const Styles = {
    Title: {
        color: "#F74D4D",
        fontSize: "26px",
        marginLeft : "20px"
    },
    CardCol : {
        width: '280px', 
        margin:'20px'
    },
    CardBody: {
        width: '18rem', 
        height: '30rem',
        backgroundColor: '#212121',
        color: 'white'
    },
    CardImg: {
        objectFit: "cover", 
        height: "28rem"
    }
}

export default HomeScreenBody