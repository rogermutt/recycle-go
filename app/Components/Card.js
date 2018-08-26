import React from "react";

const imgsrc = "../public/images/box.png";

export default props => (
            <React.Fragment>
                <img class="card-img-top" src={imgsrc} alt="Icon"/>
                <div class="card-body">
                    <p class="card-text">{props.text}</p>
                </div>
            </React.Fragment>     
        );