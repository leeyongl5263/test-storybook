import React from "react";
import PropTypes from "prop-types";
import { Container } from '../Container';
import { Button } from "../Button";
import { Tag } from "../Tag";
import { ProgressBar } from '../ProgressBar';
import { Label } from '../Label';
import { Dot } from '../Dot';
import { Title } from '../Title';
import styled from 'styled-components';
import tokens from '../Util/Token';


const propTypes = {
    profileUrl: PropTypes.string,
    loginStatus: PropTypes.string,
    userName: PropTypes.string,
    userIdentity: PropTypes.string,
    userRole: PropTypes.string,
    percentage: PropTypes.string,
    open: PropTypes.number,
    completed: PropTypes.number,
    total: PropTypes.number,
    overdue: PropTypes.number,
    menu: PropTypes.node,
};

const defaultProps = {
    profileUrl: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png",
    loginStatus: "online",
    userName: "Victor Lang",
    userIdentity: "@victorlang",
    userRole: "Marketing Student",
    percentage: "100%",
    open: 0,
    completed: 43,
    total: 43,
    overdue: 4,
};

const ProfileCard = React.forwardRef((props, ref) => {
    const ContainerWithStyle = styled(Container)`
        &:hover {
            background-color:#704FFF;
            color: white;
            div > svg {
                fill: white;
            }
            span{
                color: white;
                background-color:#9D8AFF;
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
            #identity {
                color: #C9BEFF;
            }
            #ddlMenu{
                color: black;
            }
            #assignments > div > label {
                color:#C8BDFF;
            }
        }
    `;

    return (
        <ContainerWithStyle containerColor="white">
            <div style={{ display: "flex", flexDirection: "row-reverse", padding: "20px 12px 10px 0px" }}>
                {props.menu}
            </div>
            <div style={{ height: "90%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div id="profilePhoto" style={{ display: "inline-block" }}>
                    <Dot verticalDirection="bottom" size="18px"
                        horizontalDistance={7} dotColor={tokens.statusColor[props.loginStatus]}
                        verticalDistance={2}>
                        <Button.Profile style={{ height: "85px", width: "85px" }}
                            imgUrl={props.profileUrl}
                        />
                    </Dot>
                </div>
                <Title>{props.userName}</Title>
                <Label id="identity" labelColor="#989898">{props.userIdentity}</Label>
                <Tag tagColor="#E4E0FF" fontColor="#704FFF" size="large" style={{ marginTop: "20px" }}>{props.userRole}</Tag>
                <div id="progressBar" style={{ width: "340px", marginTop: "40px" }}>
                    <ProgressBar kind="percentage" percentage={props.percentage} fontColor="#CECECE" />
                </div>
                <div id="assignments" style={{ display: "flex", width: "100%", justifyContent: "space-around", marginTop: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Title level={3}>{props.open}</Title>
                        <Label level={1} labelColor="#989898">Open</Label>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Title level={3}>{props.completed}</Title>
                        <Label level={1} labelColor="#989898">Completed</Label>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Title level={3}>{props.total}</Title>
                        <Label level={1} labelColor="#989898">Total</Label>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Title level={3}>{props.overdue}</Title>
                        <Label level={1} labelColor="#989898">Overdue</Label>
                    </div>
                </div>
            </div>

        </ContainerWithStyle>
    );
});

ProfileCard.displayName = "ProfileCard";
ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
