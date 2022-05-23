import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoursePendingForAprroval from './CoursePendingForApproval';
import RecentClientsWithSubcription from './RecentClientsWithSubcription';
import CourseDetails from './CourseDetails';

const Tables = () =>{
    return(
        <div>
            <Container>
                <Row>
                    <Col >
                     <CoursePendingForAprroval/>
                    </Col>
                    <Col >
                        <RecentClientsWithSubcription/>
                    </Col>
                    <Col>
                    <CourseDetails/>
                    </Col>
                </Row>
            </Container>
        </div>
    )


}
export default Tables