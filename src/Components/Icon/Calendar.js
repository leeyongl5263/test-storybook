import React from "react";

const IconCalendar = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
        {...props}
    >
        <path id="icon_calendar" d="M238,1342v-1a1,1,0,0,0-2,0v1h-5v-1a1,1,0,0,0-2,0v1h-5v-1a1,1,0,0,0-2,0v1a2,2,0,0,0-2,2v14a2,2,0,0,0,2,2h16a2,2,0,0,0,2-2v-14A2,2,0,0,0,238,1342Zm0,15a1,1,0,0,1-1,1H223a1,1,0,0,1-1-1v-10a1,1,0,0,1,1-1h14a1,1,0,0,1,1,1Zm-7-6v3a1,1,0,0,1-2,0v-2a1,1,0,0,0-1-1,1,1,0,0,1,0-2h1A2,2,0,0,1,231,1351Z" transform="translate(-220 -1340)" fill={props.color} />
    </svg >
);

export default IconCalendar;
