import {Col, Row} from "react-bootstrap";
import EducationTimeLine from "./TimeLine/EducationTimeline";
import WorkTimeLine from "./TimeLine/WorkTimeline";
export const Experience = () => {
    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <h3>教育经历</h3>
                        <EducationTimeLine/>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <h3>工作经历</h3>
                        <WorkTimeLine/>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};