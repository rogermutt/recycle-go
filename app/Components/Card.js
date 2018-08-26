import React from "react";

export default props => (
            <React.Fragment>
                <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Icon"/>
                <div class="card-body">
                    <p class="card-text">{props.text}</p>
                </div>
            </React.Fragment>     
        );