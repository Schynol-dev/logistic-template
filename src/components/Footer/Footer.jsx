import React from "react";

function Footer() {

    return (
        <div id="footer" className="wrapper style2">
            <div className="container">
                <div className="copyright">
                    <p>Copyright © {new Date().getFullYear()} || Design: Stela || Photos: Usplash || Video: Pexels</p> 
                </div>
            </div>
        </div>
    );
}

export default Footer;