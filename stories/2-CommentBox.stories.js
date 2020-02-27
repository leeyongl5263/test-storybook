// import React from 'react';
// import { CommentBox } from '../src';

// export default {
//   title: 'CommentBox',
//   component: CommentBox,
// };

// export const CommentBoxA = () => <CommentBox>Hello Button</CommentBox>;

import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number,color } from "@storybook/addon-knobs";
import { CommentBox } from "../src";
import Basics from "./Showcase/CommentBoxShowcase";

const CommentBoxProps = () => ({
  children: text(
    "CommentBox",
    "Looks Great! I will move this task to Completed"
  ),
  width: text("width", "252px"),
  boxColor: color("boxColor", "#bbbbbc"),
  height: text("height", "79px"),
  maxCharacter: number("maxCharacter", 90)
});

storiesOf("CommentBox", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <CommentBox {...CommentBoxProps()} />)
  .add("Basics", () => <Basics />);
