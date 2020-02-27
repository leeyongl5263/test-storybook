import styled from 'styled-components';
import tokens from "../Util/Token";

const DDMItemWithStyle = styled.div`
    width:100%;
    background-color: white;
    font-size: ${tokens.fontSize.default};
    cursor: pointer;
    display: block;
    padding: 2px 10px;
    &:hover {
        background-color: #DDDFE0;
    }
`;

export default DDMItemWithStyle;