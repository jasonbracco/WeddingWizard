import { Link } from 'react-router-dom';

function NavBar() {

    return(
        <div className="navbar">
            <div className="nav-button">
                <button><Link to="/" className="nav-link">My Wedding Board</Link></button>
            </div>
            <div className="nav-button">
                <button><Link to="/createnew" className="nav-link">Create a New Card</Link></button>
            </div>
        </div>
    );
}

export default NavBar