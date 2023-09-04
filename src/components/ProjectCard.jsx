import {Col} from "react-bootstrap";

const link = {
    marginTop: "10px",
    backgroundColor: "#ddd",
    opacity: 0.8,
    fontSize: "small",
    fontStyle: "italic",
    textDecoration: "underline",
}

export const ProjectCard = ({title, description, imgUrl, blog}) => {
    return (
        <Col size={12} sm={6} lg={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h5>{title}</h5>
                    <span>{description}</span>
                    <div style={link} hidden={blog == null}>
                        <a href={blog} target="_blank">查看文档</a>
                    </div>
                </div>
            </div>
        </Col>
    )
}
