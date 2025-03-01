import React from "react";
import "../stylecss/StyleProjects.css"

import img from "./projects/img/project1.png";
import img2 from "./projects/img/project2.png";
import img3 from "./projects/img/project3.png";
import img4 from "./projects/img/project4.png"
import img5 from "./projects/img/project5.png"
import img6 from "./projects/img/project6.png"
export default function ProjectsComponent() {

    const ProjectsList = [
        {id:1, title:"project one ( HTML, CSS )", link:"/projects/Social-media-ex-2/index.html", img:img},
        {id: 2, title:"project two ( HTML, CSS )", link:"/projects/html-css-ex-3-final/index.html", img:img2},
        {id:3, title:"project three ( HTML, CSS )", link:"/projects/blog-card-ex-4/index.html", img:img3},
        {id:4, title:"project four ( HTML, CSS )", link:"/projects/card-1/index.html",img: img4 },
        {id:5, title:"project five ( HTML, CSS )", link:"/projects/column-3-ex-3/index.html", img:img5},
        {id:6, title:"project six ( HTML, CSS )", link:"/projects/Simple Omelette-ex-1/index.html", img:img6},
    ]

    return(
        <div className="projects-container">
            <h2>MY PROJECTS</h2>
            <div className="projects">
            {ProjectsList.map((item) => {
                    return (
                        <div key={item.id} className="portofolio">
                        <div  className="project">
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <img src={item.img} alt="Screenshot of the project" width="50%" />
                            </a>
                        </div>
                        <div className="point">
                        <button onClick={()=> window.open(item.link, "_blank")}>Show Project</button>
                        </div>
                        </div>
                    );
                })}
                <hr/>
            </div>
        </div>);
}