import React from "react";
import "../stylecss/StyleSkills.css"
export default function SkillsComponent() {

    const allSkill = [
        {id:1, name: "HTML", value: 100,},
        { id:2, name: "CSS",value: 100,},
        { id:3, name: "JavaScript",value: 90,},
        { id:4, name: "React.js",value: 90,},
        { id:5, name: "Accessibility", value: 100, },
        { id:6, name: "Git", value: 85, },
        { id:7, name: "GitHub", value: 85, },
        { id:8, name: "Tilwind", value: 60, },
    ]

    return (
        <div className="skills-container">
            {allSkill.map((item) => {
                return (
                    <div key={item.id} className="skill">
                        <div  className="skills">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="bar-container">
                            <div className="bar">
                                <span style={{ width: `${item.value}%` }}>{item.value}%</span>
                            </div>
                        </div>
                    </div>
                );
            })}
            <hr/>
        </div>
    );
}