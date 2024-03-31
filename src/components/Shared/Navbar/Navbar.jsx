import { assets } from '../../../assets/assets';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar w-[5px] h-[50px]'>
            <img className='logoname' src={assets.vujon} alt="" />

        <ul className="navbar-menu">

        </ul>
            <li></li>
        </div>
    );
};

export default Navbar;