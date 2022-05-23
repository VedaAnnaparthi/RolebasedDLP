import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
//commented added for testing purpose
const CourseDetails = () => {
  return (
    <div style={{ paddingTop: '50px' }}>
    <Container style={{ width: '65rem' }}>
        <Row>
            <Col>
                <Card style={{ width: '62rem', color: 'black',  fontSize: '20px' }} >
                    <Card.Header align='center' style={{backgroundColor:"white"}}>Course Details</Card.Header>

                </Card>
            </Col>

        </Row>
        <Row>
            <Col>
                <table class="table table-bordered" style={{backgroundColor:"white"}}>
                    <thead>
                        <tr>
                            <th scope="col" align='center'>Course ID</th>
                            <th scope="col" align='center'>Course Name</th>
                            <th scope="col" align='center'>Course Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" align='center'>1</th>
                            <td>Basics of Shipping</td>
                            <td>10,000</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>2</th>
                            <td>Chapters of Shipping</td>
                            <td>15,000</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>3</th>
                            <td>Deep learning of Shipping</td>
                            <td>20,000</td>

                        </tr>
                    </tbody>
                </table>
            </Col>


        </Row>
    </Container>
</div>
  )
}
export default CourseDetails