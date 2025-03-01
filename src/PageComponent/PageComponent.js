import React from "react";

import "../stylecss/StylePage.css"

export default function HomeComponent() {
    return (
    <div className="container">
        <header>
            <div className="text">
                <h1>Nice To Meet You! I'm <span className="name">Zyad Khalifa.</span></h1>
                <p>Based in the Middle East of Egypt, I am a Front-end Developer specialized in React.js passionate about learning and creating accessible web applications. I am always looking for new things every day to improve my skills and knowledge in this field </p>
            </div>
        </header>
        <hr/>
    </div>
    );
}