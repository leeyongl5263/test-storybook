import React from 'react';
import PropTypes from "prop-types";
import { ProgressBar } from "../ProgressBar";
import { Title } from "../Title";
import { Container } from "../Container";
import { Tag } from "../Tag";
import ContainerWithStyle from "./TrelloCard.styles";
import { Button } from "../Button";
import { Dot } from "../Dot";
import { Icon } from "../Icon";
// import DropDownMenu from "@ensightful/dropdownmenu";

const propTypes = {
  isFinished: PropTypes.bool,
  title: PropTypes.string,
  denominator: PropTypes.string,
  date: PropTypes.string,
  filesNumber: PropTypes.number,
  messageNumber: PropTypes.number,
  profileUrl: PropTypes.string,
  dropDown: PropTypes.node,
  tag: PropTypes.string
};

const defaultProps = {
  isFinished: false,
  profileUrl:"https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png",
  title: "Brainstorming",
  denominator: "1/5",
  date: "Oct,12",
  filesNumber: 5,
  messageNumber: 4,
  tag: "medium"
};



function TrelloCard(props) {
  if (props.isFinished == true) {
    return (
      <React.Fragment>
        <Container
          containerColor="#DBF7E4"
          isAlertOn={true}
          borderTopColor="#4DD87A"
          height="85px"
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginLeft:"20px"}}>
            <Title level={2} isCrossOut={true}>
            {props.title}
            </Title>
            <div style={{ marginRight: "10px"}}>
            {props.dropDown}
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  } else
    return (
      <ContainerWithStyle height="185px" containerColor="#ffffff">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Title level={2} titleColor="#000000" id="title">
            {props.title}
          </Title>
          <div style={{ marginRight: "10px" }}>{props.dropDown}</div>
        </div>
        <div style={{ marginTop: "10px", marginLeft: "280px" }}>
          <Tag
            id="tag"
            tagColor="#E0DBFF"
            fontColor="#9E35EB"
            size="xsmall"
          >
            {props.tag}
          </Tag>
        </div>
        <div id="progressBar" style={{ width: "179.69px", marginTop: "20px" }}>
          <ProgressBar
            kind="fraction"
            fontColor="#CECECE"
            denominator={props.denominator.split("/")[1]}
            numerator={props.denominator.split("/")[0]}
          />
        </div>
        <div style={{ marginTop: "20px", marginLeft: "-20px" }}>
          <Tag.Icon size="large" fontColor="#989898">
            <Icon
              kind="notification-bell"
              color="#E4E5E5"
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            {props.date}
          </Tag.Icon>
          |
          <Tag.Icon size="medium" fontColor="#989898">
            <Icon
              kind="attachment"
              color="#E4E5E5"
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            {props.filesNumber}
          </Tag.Icon>
          |
          <Tag.Icon size="small" fontColor="#989898">
            <Icon
              kind="message"
              color="#E4E5E5"
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            {props.messageNumber}
          </Tag.Icon>
        </div>
        <div style={{ marginLeft: "325px", marginTop: "-40px" }}>
          <Dot
            verticalDirection="bottom"
            verticalDistance={5}
            horizontalDistance={4}
          >
            <Button.Profile imgUrl={props.profileUrl} />
          </Dot>
        </div>
      </ContainerWithStyle>
    );
}

TrelloCard.displayName = "TrelloCard";
TrelloCard.propTypes = propTypes;
TrelloCard.defaultProps = defaultProps;

export default TrelloCard;
