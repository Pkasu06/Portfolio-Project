import React from 'react'

function About() {
    return (
        <div className="container text-center w-full p-4 mt-10 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center0 justify between" id="About">
            <div className="about w-full p-2 rounded-lg border border-blue-800 bg-card text-card-foreground shadow-sm text-left">
                <h3 className="text-2xl font-semibold leading-none tracking-tight border-b-[1px] border-blue-800 p-2 mb-2 text-blue-800 text-center">About me</h3>
                <div className="content px-2 mt-2">
                    I have around 3 years of experience as UI Developer with hands on experience in HTML, CSS, Javascript, Less. 
                    I am good at React, NextJs, TailwindCSS. 
                    I am currently working on expanding my skills on React, Redux, Typescript, NextJS by working on new projects, enhancing the existing ones.
                </div>
            </div>
        </div>
    )
}

export default About