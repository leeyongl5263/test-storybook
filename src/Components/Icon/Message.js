import React from "react";

const Message = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.069" viewBox="0 0 20 20.069" {...props}>
        <path
            id="message" d="M72.172,22.1A5.9,5.9,0,0,1,78,27.861V37.79a.409.409,0,0,1-.7.291C72.718,33.2,73.493,34.093,72.735,33H67.656a5.5,5.5,0,1,1,0-11H72m.344-2H67.656a7.5,7.5,0,1,0,0,15h4.25l3.978,4.237A2.323,2.323,0,0,0,80,37.79V27.861A7.856,7.856,0,0,0,72.318,20Z" transform="translate(-60 -20)"
            fill={props.color}
        />
    </svg>
);

export default Message;

