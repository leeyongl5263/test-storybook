import styled from "styled-components";
import tokens from '../Util/Token';

const LabelStyles = styled.label`

  font-size: ${props => tokens.label.fonts["level"+props.level]};
  font-weight: regular;
  position: relative;
  color: ${props => props.labelColor};

  ${props => (props.isCrossOut ? "text-decoration:line-through;" : "")}
`;



export default LabelStyles;