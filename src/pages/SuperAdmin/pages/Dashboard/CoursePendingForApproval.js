import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";


const CoursePendingForAprroval = () => {
  return (
    <div style={{ paddingTop: '50px' }}>
    <Container style={{ width: '65rem' }}>
        <Row>
            <Col>
                <Card style={{ width: '62rem', color: 'black', paddingLeft: '1px', fontSize: '20px' }} >
                    <Card.Header align='center' style={{backgroundColor:"white"}}>Course Summary Approved and Rejected</Card.Header>

                </Card>
            </Col>

        </Row>
        <Row>
            <Col>
                <table class="table table-bordered" style={{backgroundColor:"white"}} >
                    <thead>
                        <tr>
                            <th scope="col" align='center'>Course ID</th>
                            <th scope="col" align='center'>Course Name</th>
                            <th scope="col" align='center'>Course Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" align='center'>1</th>
                            <td>Basics of Shipping</td>
                            <td>Approved</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>2</th>
                            <td>Chapters of Shipping</td>
                            <td>Rejected</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>3</th>
                            <td>Deep learning of Shipping</td>
                            <td>Approved</td>

                        </tr>
                    </tbody>
                </table>
            </Col>


        </Row>
    </Container>
</div>
  )
}
export default CoursePendingForAprroval