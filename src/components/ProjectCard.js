import { Col , Row} from "react-bootstrap";
import {GitIcon, AppIcon, PlayIcon} from "./myIcons.js"

export const ProjectCard = ({ title, description, imgUrl, source }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <Row className="justify-content-center">
             {source.gitHub && <Col><GitIcon href = {source.gitHub} target="_blank" rel="noopener noreferrer"/></Col>}
            {source.appStore && <Col><AppIcon href = {source.appStore} target="_blank" rel="noopener noreferrer"/></Col>}
            {source.playStore && <Col><PlayIcon href = {source.playStore} target="_blank" rel="noopener noreferrer"/></Col>}
          </Row>
        </div>
      </div>
    </Col>
  )
}
