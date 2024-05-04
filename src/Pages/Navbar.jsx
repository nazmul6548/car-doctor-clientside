import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";
import { AuthContext } from "../component/AuthProvider";


const Navbar = () => {
  const {user,logout} = useContext(AuthContext)

  const handleclick = () => {
    logout()
    .then(() => {})
    .then(error => console.log(error))


  };
    const [open, setOpen] = useState(false);
    return (
        <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative  flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src={logo}
                alt="logo"
                className="dark:hidden"
              />
              {/* <img
                
                alt="logo"
                
              /> */}
              <p className="hidden dark:block"><ImCross /></p>
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 z-10 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-950 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-950 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-950 dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/">Home</ListItem>
                  
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Services</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                  <ListItem NavLink="/#">Contact</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
            {
                user?.email?<Link onClick={handleclick}
                to="/"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Log Out
              </Link> :  <Link
              to="/logIn"
              className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
            >
              Log innn
            </Link>
              }
             
              

              <a
                href="/#"
                className="rounded-md border-2 border-[#FF3811] text-[#FF3811] px-7 py-3 text-base font-medium  hover:text-black hover:bg-[#FF3811]"
              >
                Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
};

export default Navbar;



const ListItem = ({ children, NavLink }) => {
    return (
      <>
        <li>
          <a
            href={NavLink}
            className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
          >
            {children}
          </a>
        </li>
      </>
    );
  };