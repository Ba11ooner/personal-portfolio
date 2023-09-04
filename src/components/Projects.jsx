import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";

import developing from "../assets/img/project/project-develping.png";
import vote from "../assets/img/project/project-vote.png";
import saas from "../assets/img/project/project-saas.png";
import instrument from "../assets/img/project/project-instrument.png";
import unity from "../assets/img/project/project-game.jpg";
import miniProgram from "../assets/img/project/project-miniprogram.png";
import api from "../assets/img/project/project-api.png";
import crud from "../assets/img/project/project-crud.png";
import userCenter from "../assets/img/project/project-user-center.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const center = {
    "display": "flex",
    "align-items": "center",
    "justify-content": "center",
};

export const Projects = () => {

    const webProjects = [
        {
            title: "校园点歌平台",
            description: "辅助校内广播台点歌，为学生提供点歌和投票服务，为教师提供审核服务",
            imgUrl: vote,
            blog: "https://www.cnblogs.com/ba11ooner/p/17209160.html"
        },
        {
            title: "面向小型店面的餐饮 SaaS 系统",
            description: "无需运维，按需租用，为小型餐饮店提供采购管理、人员管理、运营分析服务",
            imgUrl: saas,
            blog:"https://www.cnblogs.com/ba11ooner/p/17674780.html"
        },
        {
            title: "用户中心",
            description: "提供用户登录注册、用户信息管理、邮箱验证服务",
            imgUrl: userCenter,
            blog:"https://www.cnblogs.com/ba11ooner/p/17645438.html"
        },
        {
            title: "可复用 CRUD 项目",
            description: "提供登录注册、权限认证、CRUD 服务",
            imgUrl: crud,
            blog: "https://www.cnblogs.com/ba11ooner/p/17658535.html"
        },
        {
            title: "API 开放平台",
            description: "按次计费，提供接口调用服务",
            imgUrl: api,
            blog:"https://www.cnblogs.com/ba11ooner/p/17674751.html"
        },
        {
            title: "聚合搜索平台",
            description: "可复用搜索中台，提供全局搜索服务，支持同一页面搜索不同来源不同类型的内容",
            imgUrl: developing,
        },

    ];

    const unityProjects = [
        {
            title: "第三人称射击游戏",
            description: "3D 版 Brotato，限时计分制射击游戏",
            imgUrl: unity,
        },
        {
            title: "化学器械仿真项目",
            description: "浓度检测仪仿真，支持简单交互",
            imgUrl: instrument,
        },
    ]

    const miniProgramProjects = [
        {
            title: "哈日记",
            description: "Serverless 云开发微信小程序，提供日记服务",
            imgUrl: miniProgram,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>项目</h2>
                                    <p>成果物</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Web 项目</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Unity 项目</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">小程序项目</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row style={center}>
                                                    {
                                                        webProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row style={center}>
                                                    {
                                                        unityProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row style={center}>
                                                    {
                                                        miniProgramProjects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}
