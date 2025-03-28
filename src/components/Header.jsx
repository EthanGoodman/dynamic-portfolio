import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1 className="site-title">Ethan Goodman</h1>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Experience">Experience</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;