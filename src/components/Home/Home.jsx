import React from "react";

import dockVideo from "../../assets/video/dock.mp4";

function Home() {

    return (
        <section id="home">
            <video autoPlay="autoplay" loop="loop" muted id="video-dock">
                <source src={dockVideo} type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
            <div className="container">
                <div className="text-box">
                    <h2>Welcome to Logistics</h2>
                    <p>This is Logistics a responsive site template developed by <a href="http://kamilschynol.com/" target="_blank" rel="noreferrer">Kamil Schynol</a></p>
                </div>
            </div>
        </section>
    );
}

export default Home;