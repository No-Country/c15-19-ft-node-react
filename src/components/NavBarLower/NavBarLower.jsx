import { FaHouse, FaPlus } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";



function NavBarLower() {
    return (
        <div className="fixed bottom-0 h-16 w-screen m-0 flex flex-row items-center justify-around bg-BlueMarine text-white shadow-lg">
            <a href="/home"><NavBarInfIcon icon={<FaHouse size="20" />} text='Home' /></a>
            <a href="/categories"><NavBarInfIcon icon={<MdMessage size="20" />} text='Categories' /></a>
            <a href="/"><NavBarInfNew icon={<FaPlus size="40" />} text='New' /></a>
            <a href="/"><NavBarInfIcon icon={<BsFillPeopleFill size="20" />} text='Friends' /></a>
            <a href="/profile"><NavBarInfIcon icon={<IoPerson size="20" />} text='Profile' /></a>
        </div>
    );
}

const NavBarInfIcon = ({ icon, text = '', useHref }) => (
    <div className="navbarinf-icon group">
        {icon}
        <span className="navbarinf-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>

);


const NavBarInfNew = ({ icon, text = '' }) => (
    <div className="navbarinfnew-icon group">
        {icon}
        <span className="navbarinfnew-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>

);

export default NavBarLower;
