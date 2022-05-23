import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";


const Cards = () => {
    return (
        <div>
            <Container style={{paddingTop:"20px"}}>
                <Row>
                    <Col xl={3}>

                        <Card className='box'  style={{ width: '15rem', color: 'black', borderRadius: '10px', height: '10rem', fontSize: '20px',boxShadow:"5px 5px 2px" }} >
                            <Card.Header align='center' style={{backgroundColor:'white', borderRadius: '10px'}}> Total Courses</Card.Header>
                            <Card.Body>

                                <Card.Text align='center' >
                                    500
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3}>
                        <Card className='box'  style={{ width: '15rem', color: 'black', borderRadius: '10px', height: '10rem', fontSize: '20px',boxShadow:"5px 5px 2px" }} >
                            <Card.Header align='center' style={{backgroundColor:'white',borderRadius: '10px'}}>Pending courses for approval</Card.Header>
                            <Card.Body>

                                <Card.Text align='center'>
                                    450
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3}>
                        <Card className='box' style={{ width: '15rem', color: 'black', borderRadius: '10px', height: '10rem', fontSize: '20px',boxShadow:"5px 5px 2px" }} >
                            <Card.Header align='center' style={{backgroundColor:'white',borderRadius: '10px'}}>Client Count</Card.Header>
                            <Card.Body>

                                <Card.Text align='center'>
                                    20,000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xl={3}>
                        <Card className='box' style={{ width: '15rem', color: 'black', borderRadius: '10px', height: '10rem', fontSize: '20px',boxShadow:"5px 5px 2px" }}  >
                            <Card.Header align='center' style={{backgroundColor:'white',borderRadius: '10px'}}>Total Revenue</Card.Header>
                            <Card.Body>

                                <Card.Text align='center'>
                                    20,000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards;

