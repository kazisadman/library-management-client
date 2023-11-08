import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontextprovider } from "../Context/Authcontext";
import { BiUserCircle } from "react-icons/bi";
// import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
  const { userLogout, user } = useContext(Authcontextprovider);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addbook"}>Add Book</NavLink>
      </li>
      <li>
        <NavLink to={"/allbooks"}>All Books</NavLink>
      </li>
      <li>
        <NavLink to={"/borrowedbooks"}>Borrowed Books</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    userLogout();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          src="https://i.ibb.co/ysLWJ78/logo.png"
          className="w-1/2 h-16"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 items-center">
          {user?.displayName && <h2>{user.displayName}</h2>}
          {user?.photoURL ? (
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          ) : (
            <BiUserCircle className="text-4xl"></BiUserCircle>
          )}
        </div>
        {!user ? (
          <Link to={"/login"}>
            <button className="btn bg-[#FF7A00] text-white">Login</button>
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="btn bg-[#FF7A00] text-white"
          >
            logout
          </button>
        )}{" "}
      </div>
    </div>
  );
};

export default Navbar;
