import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";


const RecentClientsWithSubcription = () => {
  return (
    <div style={{ paddingTop: '50px' }}>
    <Container style={{ width: '65rem' }}>
        <Row>
            <Col>
                <Card style={{ width: '62rem', color: 'black', paddingLeft: '1px', fontSize: '20px' }} >
                    <Card.Header align='center' style={{backgroundColor:"white"}}>Recent Clients With Transaction Details</Card.Header>

                </Card>
            </Col>

        </Row>
        <Row>
            <Col>
                <table class="table table-bordered" style={{backgroundColor:"white"}}>
                    <thead>
                        <tr>
                            <th scope="col" align='center'>Client ID</th>
                            <th scope="col" align='center'>Client Name</th>
                            <th scope="col" align='center'>Number of Courses</th>
                            <th scope="col" align='center'>Amount Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" align='center'>1</th>
                            <td>Venkat</td>
                            <td>10</td>
                            <td>10,000</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>2</th>
                            <td>Shiva</td>
                            <td>20</td>
                            <td>20,000</td>

                        </tr>
                        <tr>
                            <th scope="row" align='center'>3</th>
                            <td>Vishnu</td>
                            <td>30</td>
                            <td>30,000</td>

                        </tr>
                    </tbody>
                </table>
            </Col>


        </Row>
    </Container>
</div>
  )
}
export default RecentClientsWithSubcription