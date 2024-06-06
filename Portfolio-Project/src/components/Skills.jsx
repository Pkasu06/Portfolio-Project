import React from 'react'
import { skillSet } from '../constants'

function Skills() {
    return (
        <div className="container text-center w-full p-4 my-20 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center0 justify between" id="Skills">
            <div className="skills w-full p-2 rounded-lg border border-blue-800 bg-card text-card-foreground shadow-sm text-left">
                <h3 className="text-2xl font-semibold leading-none tracking-tight border-b-[1px] border-blue-800 p-2 mb-2 text-blue-800 text-center">Skills</h3>
                <div className="content p-4 mt-2">
                    <ul className="skills-list">
                        {skillSet.map((skill) => (
                            <li key={skill} className="text-white">{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills