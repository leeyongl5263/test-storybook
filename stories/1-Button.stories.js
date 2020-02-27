// import React from 'react';
// import { action } from '@storybook/addon-actions';
// import { Button } from '../src';

// export default {
//   title: 'Button',
//   component: Button,
// };

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { Button } from "../src";
import Basics from "./Showcase/ButtonShowcase";

const Types = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DESTRUCTIVE: "destructive",
  ACCENT: "accent",
  NOSTYLE: "nostyle"
};

const ButtonSizes = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  LONG: "long",
  XTRALONG: "xtralong"
};


function clickHandler() {
  action("Clicked a button")();
}

const buttonProps = () => ({
  children: text("label", "Button"),
  size: select("size", ButtonSizes, "small"),
  kind: select("kind", Types, "default"),
  onClick: clickHandler,
  disabled: boolean("isDisabled", false),
  type: select("isSubmit", { BUTTON: "button", SUBMIT: "submit" }, "button")
});

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Button {...buttonProps()} />)
  .add("Basics", () => <Basics />);

