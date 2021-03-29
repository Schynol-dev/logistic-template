import React from "react";

function Contact() {

    return (
        <section id="contact" className="wrapper style3">
            <div className="container">
                <h2>Let us help you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus, dolore exercitationem eaque quod earum, 
                aliquid pariatur omnis facilis quos veniam commodi quae voluptatibus, cumque nobis magni excepturi rem ducimus!</p>
                <div className="form">
                    <div className="field half">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="field half">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="field">
                        <textarea type="text" placeholder="Message"></textarea>
                    </div>
                    <button>Send Message</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;