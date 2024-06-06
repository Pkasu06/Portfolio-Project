import React from 'react'
import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <div className="container text-center w-full p-4 my-20 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center0 justify between" id="Contact">
            <div className="contact w-full p-2 rounded-lg border border-blue-800 bg-card text-card-foreground shadow-sm text-left">
                <h3 className="text-2xl font-semibold leading-none tracking-tight border-b-[1px] border-blue-800 p-2 mb-2 text-blue-800 text-center">Contact</h3>
                <div className="social-icons p-4 mt-2 flex justify-center">
                    <a href='mailto:pkasu06@gmail.com' target="_blank"><CiMail style={{ fontSize: '50px' }}/></a>
                    <a href='https://github.com/Pkasu06' target="_blank"><FaGithub style={{ fontSize: '50px' }}/></a>
                    <a href='https://www.linkedin.com/in/lakshmiprasannakasu06/' target="_blank"><FaLinkedin style={{ fontSize: '50px' }}/></a>
                    <a href='https://x.com/kasu_prasanna' target="_blank"><FaSquareXTwitter style={{ fontSize: '50px' }}/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact