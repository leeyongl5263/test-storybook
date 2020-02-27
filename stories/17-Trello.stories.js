import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text,boolean,number } from "@storybook/addon-knobs";
import { TrelloCard, Icon, DropDownMenu } from '../src';


const trellocardProps = () => ({
  isFinished: boolean("isFinished", false),
  title: text("title", "Brainstorming"),
  denominator: text("denominator", "1/5"),
  date: text("date", "Oct,12"),
  filesNumber: number("filesNumber", 5),
  messageNumber: number("messageNumber", 4),
  tag: text("tag", "medium")
});

storiesOf("TrelloCard", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <>
      <TrelloCard
        {...trellocardProps()}
        dropDown={
          <DropDownMenu id= "ddlMenu" trigger={<Icon kind="dot" color="#BBBBBC" />}>
            <DropDownMenu.Item>Edit</DropDownMenu.Item>
            <DropDownMenu.Item>Delete</DropDownMenu.Item>
            <DropDownMenu.Item>Move</DropDownMenu.Item>
          </DropDownMenu>
        }
      />
    </>
  ));