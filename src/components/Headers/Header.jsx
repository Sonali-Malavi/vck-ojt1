import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    return(
        <header className='main-header'>
            
                <div className='college-name' >
                <a href="/">Vivekanand College</a>
                </div>
                <nav className='first-nav'>
                <Link to= "/"> Home </Link>
                <Link to ="/aboutpage"> About </Link>
                <Link to ="/coursespage"> Courses </Link>
                <Link to ="/contactpage"> Contact </Link>
                <a className="button" href="/admissionpage">Apply Now</a>
            </nav>
            <nav className='second-nav'>
                <button className='close-btn'></button>
                <a className="nav-item" href="/">Home</a>
                <a className="nav-item" href="/">About</a>
                <a className="nav-item" href="/">Courses</a>
                <a className="nav-item" href="/">Contact</a>
                <a className='nav-item' href="/AdmissionPage">Apply Now</a>
            </nav>
        </header>
    )
}
export default Header