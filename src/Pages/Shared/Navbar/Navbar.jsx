import { Link } from "react-router-dom";
import logo from "/public/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="navbar lg:px-32">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-12">
            <div>
              <Link to="/">
                <img src={logo} alt="" className="w-36 h-16" />
              </Link>
            </div>
            <div className="hidden lg:flex lg:gap-6">
              <ul className="menu menu-horizontal items-center gap-2">
                <div className="dropdown dropdown-bottom dropdown-hover ">
                  <div className="flex items-center">
                    <h1 tabIndex={0} className="text-[18px] font-bold">
                      Solutions
                    </h1>
                    <RiArrowDropDownLine size="1.4em" color="blue" />
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-bottom dropdown-hover ">
                  <div className="flex items-center">
                    <h1 tabIndex={0} className="text-[18px] font-bold">
                      Features
                    </h1>
                    <RiArrowDropDownLine size="1.4em" color="blue" />
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
                <li>
                  <Link to="/" className="text-[18px] font-bold">
                    Blog
                  </Link>
                </li>
                <div className="dropdown dropdown-bottom dropdown-hover ">
                  <div className="flex items-center">
                    <h1 tabIndex={0} className="text-[18px] font-bold">
                      About
                    </h1>
                    <RiArrowDropDownLine size="1.4em" color="blue" />
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end gap-4">
          <Link to="/">
            <button className="btn border border-[#0076CE] text-[#0076CE] py-[10px] px-[20px] rounded-lg">
              Login
            </button>
          </Link>
          <Link to="/">
            <button className="btn bg-[#0076CE] text-white py-[10px] px-[20px] rounded-lg">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
