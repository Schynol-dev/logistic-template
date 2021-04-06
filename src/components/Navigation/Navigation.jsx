import React from "react";

function Navigation() {

    return (
        <div id="navigation">
            <div className="logo">
                <h3>Logistics</h3>
            </div>
            <div className="list">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#do">What We Do</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Hire Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;