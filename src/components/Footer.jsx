import {Container, Row, Col} from "react-bootstrap";
import navIcon1 from "../assets/img/nav/博客园.svg";
import navIcon2 from "../assets/img/nav/github.svg";
import navIcon3 from "../assets/img/nav/bilibili.svg";
import {MailchimpForm} from "./MailchimpForm";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm/>
                    <Col size={12} sm={6}>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.cnblogs.com/ba11ooner/"
                               target="_blank"><img src={navIcon1} alt=""/></a>
                            <a href="https://github.com/Ba11ooner"
                               target="_blank"><img src={navIcon2} alt=""/></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
