import React from 'react'
import appointmentLogo from '/AppointmentPage.png'

function Projects() {
    return (
        <div className="container text-center w-full p-4 my-20 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center0 justify between" id="Projects">
            <div className="projects w-full p-2 rounded-lg border border-blue-800 bg-card text-card-foreground shadow-sm text-left">
                <h3 className="text-2xl font-semibold leading-none tracking-tight border-b-[1px] border-blue-800 p-2 mb-2 text-blue-800 text-center">Projects</h3>
                <article className="portfolio-item p-4 mt-2 flex">
                    <div className="w-1/2  h-12">
                        <div className="portfolio-item-img">
                            <img src={appointmentLogo} width="200px" height="auto" />
                        </div>
                        <div className="portfolio-item-content"></div>
                        <div className="portfolio-item-links"></div>
                    </div>
                    
                </article>
            </div>
        </div>
    )
}

export default Projects