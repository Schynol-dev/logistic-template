import React from "react";

function Footer() {

    return (
        <div id="footer" className="wrapper style2">
            <div className="container">
                <div className="copyright">
                    <p>Copyright © {new Date().getFullYear()} || Design: <a href="http://kamilschynol.com/" target="_blank" rel="noreferrer">Kamil Schynol</a> || Photos: Unsplash || Video: Pexels</p> 
                </div>
            </div>
        </div>
    );
}

export default Footer;