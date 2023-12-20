import { FaHouse, FaPlus } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const withouSidebarRoutes = ["/createpost", "/signin", "/login"];

function NavBarLower() {
  const { pathname } = useLocation();
  const { auth, loading } = useAuth();

  console.log('Auth:', auth)

  console.log(auth._id)


  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  return (

    <div className="fixed z-50 bottom-0 h-16 w-screen m-0 flex flex-row items-center justify-around bg-BgGreen text-white shadow-lg">
      <Link href="/home">

        <NavBarInfIcon icon={<FaHouse size="20" />} text="Home" />
      </Link>
      <Link to="/categories">
        <NavBarInfIcon icon={<FaSearch size="20" />} text="Categories" />
      </Link>
      <Link to="/createpost">
        <NavBarInfNew icon={<FaPlus size="30" />} text="New" />
      </Link>
      <Link to="/">-
        <NavBarInfIcon icon={<MdMessage size="20" />} text="Messages" />
      </Link>
      <Link to="/profile/:id">
        <NavBarInfIcon icon={<IoPerson size="20" />} text="Profile" />
      </Link>
    </div>
  );
}

const NavBarInfIcon = ({ icon, text = "", useHref }) => (
  <div className="navbarinf-icon group">
    {icon}
    <span className="navbarinf-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const NavBarInfNew = ({ icon, text = "" }) => (
  <div className="navbarinfnew-icon group">
    {icon}
    <span className="navbarinfnew-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default NavBarLower;
