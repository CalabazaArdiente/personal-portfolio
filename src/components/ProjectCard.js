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
          <Row className="d-flex justify-content-between">
            {source.gitHub && <GitIcon href = {source.gitHub} target="_blank" rel="noopener noreferrer"/>}
            {source.appStore && <AppIcon href = {source.appStore} target="_blank" rel="noopener noreferrer"/>}
            {source.playStore && <PlayIcon href = {source.playStore} target="_blank" rel="noopener noreferrer"/>}
          </Row>
        </div>
      </div>
    </Col>
  )
}
