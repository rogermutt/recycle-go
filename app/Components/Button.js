import React from "react";

export default props =>  (
        <button onClick={props.handler} type="button" className={props.type} >Primary</button>
);
