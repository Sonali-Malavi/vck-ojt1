import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className='main-header'>
            
                <div className='college-name' >
                <a href="/">Vivekanand College</a>
                </div>
                <nav className='first-nav'>
                <Link to= "/homepage"> Home </Link>
                <Link to ="/aboutpage"> About </Link>
                <Link to ="/coursespage"> Courses </Link>
                <Link to ="/contactpage"> Contact </Link>
                <button type="button" className='humburgger-menu'>Apply Now</button>

            </nav>
            <nav className='second-nav'>
                <button className='close-drawer-btn'></button>
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