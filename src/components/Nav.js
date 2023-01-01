import React,{ useState } from 'react'
import { FaHome, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    }

    const navigate = useNavigate();
    return (
        <nav>
            <div className="contain">
                <h2>Noah <br /> Duminil</h2>
                <FaHome onClick={() => navigate('/')} size={35} />
                <FaBars id="menu-button" onClick={toggleMenu} size={35} />
            </div>
            <ul id="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
                <li onClick={() => navigate('/about')}>
                    À propos
                </li>
                <li onClick={() => navigate('/project')}>
                    Mes projets
                </li>
                <li onClick={() => navigate('/maitrises')}>
                    Mes maitrises
                </li>
            </ul>
        </nav>
    );
}

export default Navbar