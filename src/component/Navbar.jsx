import SearchContact from "./contacts/SearchContact";

import { BACKGROUND, PURPLE, FOREGROUND } from "../helpers/Colors";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ query, search }) => {
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container-fluid">
        <div className="row w-100 justify-content-center align-content-center align-items-center">
          {/* <div className="col-12"> */}
         
            <div className="col-5 ">
              <ul  className="nav nav-pills flex align-content-center align-items-center justify-content-start">
                <li
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  className="nav-item fa-notes-medical  m-1"
                >
                  <NavLink
                    to={"/contacts/add"}
                    style={{ textDecoration: "nun" }}
                    className="nav-link"
                  >
                    ساخت جدید
                  </NavLink>
                </li>
                <li
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  className="nav-item m-1 "
                >
                  <NavLink to={"/products"}className="nav-link"> محصول </NavLink>
                </li>
                <li
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  className="nav-item  m-1"
                >
                  <NavLink to={"/contacts"} className="nav-link"> داشبورد</NavLink>
                </li>
                <li
                  style={{
                    display: "flex",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  className="nav-item  m-1"
                >
                  <NavLink to={"/"} className="nav-link"> خانه</NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-brand col-3  m-1">
                      <i className="fa fa-user" style={{ color: PURPLE }} /> وب اپلیکیشن
                      مدیریت{"  "}
                      <span style={{ color: PURPLE }}>محصول</span>
                    </div>
          {location.pathname === "/" ? (
            <div className=" col-3">
              <SearchContact query={query} search={search} />
            </div>
          ) : null}
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
