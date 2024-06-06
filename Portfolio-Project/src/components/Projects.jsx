import React from 'react'
import homeLogo from '/homePage.png'

function Projects() {
    return (
        <div className="container text-center w-full p-4 my-20 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center0 justify-between" id="Projects">
            <div className="projects w-full p-2 rounded-lg border border-blue-800 bg-card text-card-foreground shadow-sm text-left">
                <h3 className="text-2xl font-semibold leading-none tracking-tight border-b-[1px] border-blue-800 p-2 mb-2 text-blue-800 text-center">Projects</h3>
                <article className="portfolio-item p-4 mt-2 flex text-center items-center justify-between">
                    <div className="">
                        <div className="portfolio-item-img text-center">
                            <img src={homeLogo} width="100%" height="auto" alt=""/>
                        </div>
                        <div className="portfolio-item-content">
                            <h3 className="text-2xl font-semibold py-2 text-blue-800">Reservation system for the local plumber</h3>
                            <p>Reservation system for local plumber, where the user can select time slots and book an appointment. It also have admin dashboard where the use will be able to </p>
                            <p className="pt-2 text-blue-800"><b>Technologies Used:</b> Next JS | Daisy UI | Java | Firebase</p>
                        </div>
                        <div className="portfolio-item-links pt-8">
                            <a href="https://github.com/rajakrishna/dsd-cohort-2024" target="_blank" className="text-white border hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Github</a>
                            <a href="https://dsd-cohort-2024-ruddy.vercel.app/" target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Live Demo</a>
                        </div>
                    </div>
                    
                </article>
            </div>
        </div>
    )
}

export default Projects