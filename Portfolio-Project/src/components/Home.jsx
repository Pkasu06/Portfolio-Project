import React from 'react'

function Home() {
    return (
        <div className="container text-center w-full p-4 mt-10 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center0 justify between" id="Home">
            {/* <div className="cta w-full md:basis-2/5 mx-auto">
                <h1 className="font-bold text-[40px] md:text-6xl text-primary">Hello !</h1>
            </div> */}
            <div className="name w-full p-2 bg-card text-card-foreground shadow-sm text-center">
                <h1 className="font-bold text-[40px] md:text-6xl text-primary p-2">Lakshmiprasanna Kasu</h1>
                <h2 className="font-bold text-[16px] md:text-3xl text-primary p-2 mb-2">UI Developer</h2>
                <a href="/" download className="text-white border hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Resume</a>
                {/* <a href="#contact" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact Me</a> */}
            </div>
        </div>
    )
} 

export default Home