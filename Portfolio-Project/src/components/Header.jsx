import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'
import { navItems } from '../constants'

function Header() {

    // const navigate = useNavigate();
    //TODO: Add theme changer

    return (
        <>
            <header>
                <nav className="container flex items-center justify-between flex-wrap p-6 border-b-[1px] border-white">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        {/* <Link to="/"> */}
                            <a href='/'>
                                <h3 className="text-3xl font-extrabold text-primary">Portfolio</h3>
                            </a>
                            
                        {/* </Link> */}
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <ul className="flex ml-auto">
                            {navItems.map((item) => 
                            navItems.length > 0 ? (
                                <li key={item}>
                                    <a href={`#${item}`}><button className="inline-block px-6 py-2 duration-220 hover:bg-blue-100 rounded-full">{item}</button></a>
                                </li>
                            ) : null
                            )}
                        </ul>
                        
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header