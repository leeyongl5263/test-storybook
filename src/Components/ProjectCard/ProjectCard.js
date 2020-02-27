import React from "react";
import PropTypes from "prop-types";
import { Container } from '../Container';
import { Tag } from "../Tag";
import { ProgressBar } from '../ProgressBar';
import { Label } from '../Label';
import { Title } from '../Title';
import { Icon } from '../Icon';
import styled from 'styled-components';
import tokens from '../Util/Token';

const propTypes = {
    projectUrl: PropTypes.string,
    menu: PropTypes.node,
    title: PropTypes.string,
    tasks: PropTypes.array,
    percentage: PropTypes.string,
    deadline: PropTypes.string,
    attachment: PropTypes.number,
    message: PropTypes.number,
    profileList: PropTypes.node,
};

const defaultProps = {
    projectUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png",
};

const ProjectCard = React.forwardRef((props, ref) => {
    const ListItem = styled(Label)`
        display: flex;
        &:before {
            content: "";
            display: inline-block;
            width: 3px;
            height:3px;
            background-color: #BFBFC0;
            border-radius: 50%;
            align-self:center;
            margin-right:5px;
        }
    `;
    const ContainerWithStyle = styled(Container)`
        &:hover {
            background-color:#704FFF;
            color: white;
            div > img{
                border: 1px solid white !important;
            }
            span{
                color: #DDD7FF;
            }
            span > svg > path{
                fill: #9D89FF;
            }
            #progressBar > div {
                background-color:#9D89FF;
            }
            #progressBar > div > div {
                background-color:white;
            }
            label{
                color:white;
            }
            #ddlMenu{
                color: black;
            }
            #line{
                stroke: #9D89FF;
            }
        }
    `;
    return (
        <Container containerColor="white">
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px"
            }}>
                <img src={props.projectUrl} alt="" height="60px" width="60px"
                    style={{
                        borderRadius: "8px",
                        border: "1px solid #BFBFC0"
                    }} />
                {props.menu}
            </div>
            <Title style={{ marginLeft: "10px" }}>
                {props.title}
            </Title>
            <div style={{ display: "flex", flexDirection: "column", padding: "30px 5px" }}>
                {
                    props.tasks.map(e =>
                        <ListItem labelColor="#989898" level={3}>{e}</ListItem>
                    )}
            </div>
            <div id="progressBar" style={{ width: "340px", margin: "0px auto", padding: "40px 0px" }}>
                <ProgressBar kind="percentage" percentage={props.percentage} fontColor="#CECECE" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Tag.Icon size="large" fontColor="#989898">
                    <Icon kind="notification-bell" color="#E4E5E5" width="20px" height="20px"
                        style={{ marginRight: "5px" }} />
                    {props.deadline}
                </Tag.Icon>
                <Icon kind="line" />
                <Tag.Icon size="small" fontColor="#989898">
                    <Icon kind="attachment" color="#E4E5E5"
                        style={{ marginRight: "5px" }} />
                    {props.attachment}
                </Tag.Icon>
                <Icon kind="line" />
                <Tag.Icon size="small" fontColor="#989898">
                    <Icon kind="message" color="#E4E5E5"
                        style={{ marginRight: "5px" }} />
                    {props.message}
                </Tag.Icon>
                <div style={{ margin: "0px 10px 0px auto" }}>
                    {props.profileList}
                </div>

            </div>
        </Container>
    );
});


ProjectCard.displayName = "ProjectCard";
ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;

export default ProjectCard;

