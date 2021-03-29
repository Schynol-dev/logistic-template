import React from "react";

import Box from "./components/Box";

import truck from "../../assets/images/truck_edit.jpg";
import cargo from "../../assets/images/cargo.jpg";
import plane from "../../assets/images/plane.jpg";
import freight from "../../assets/images/freight-train.jpg";

function Do() {

    return (
        <section id="do" className="wrapper style2">
            <div className="container">
                <div className="boxes">
                    <div className="box">
                        <Box background={truck} />
                    </div>
                    <div className="box">
                        <Box background={cargo} />
                    </div> 
                    <div className="box">
                        <Box background={plane} />
                    </div> 
                    <div className="box">
                        <Box background={freight} /> 
                    </div>     
                </div>
            </div>
        </section>
    );
}

export default Do;