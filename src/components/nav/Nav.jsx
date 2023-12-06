import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import style from "./Nav.module.css";
import {ThemeProvider} from "../../context/Theme.context"
import Themebutton from "../button/index"
function Nav() {
  
  return (
    <ThemeProvider>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            {/* Second Task */}
            <Link to="/">
              <img
                className={style.logo}
                src="https://files.codingninjas.in/pl-ninja-16706.svg"
                alt="logo"
              />
            </Link>
            <h4>HappyCoding</h4>
          </div>
          <div className={style.nav_details}>
            <Themebutton/>
            <button>
               {/* Second Task */}
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </ThemeProvider>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
