import React from "react";

function Box(props) {

    return (
        <>
            <div className="image" style={{backgroundImage: `url(${props.background})`}}></div>
                <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa obcaecati inventore temporibus et delectus officia quaerat ex possimus magni quam commodi,
                blanditiis nam aperiam qui fugiat repellendus iusto tempora voluptas!</p>
            </div>
        </>
    );
}

export default Box;