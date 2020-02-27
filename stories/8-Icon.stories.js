import React from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from "../src";

storiesOf("Icon", module).add("Showcase", () => (
  <>
    <Icon kind="download" />
    <Icon kind="message" />
    <Icon kind="notification-bell" />
    <Icon kind="attachment" />
    <Icon kind="ring-bell" />
    <Icon kind="dot" />
    <Icon kind="bin" />
    <Icon kind="view-simple" width="30px" height="30px" color="gray" />
    <Icon kind="calendar" />
    <Icon kind="search" />
    <Icon
      kind="drop-down-arrow"
      width="80px"
      height="80px"
      color="gray"
      strokeWidth={4}
    />
    <Icon kind="dash-board" />
    <Icon kind="chart" />
    <Icon kind="toggle" />
    <Icon kind="paper" />
    <Icon kind="graph" />
    <Icon kind="chatroom" />
    <Icon kind="repeat" />
    <Icon kind="setting" />
    <Icon kind="home" />
    <Icon kind="profile" />
  </>
));
