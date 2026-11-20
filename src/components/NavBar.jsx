
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

function NavBar() {
    const { appName } = useAppContext();
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Providers", path: "/providers" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top p-3">
      {/* <div className="container"> */}
        <NavLink className="navbar-brand fw-bold" to="/">
          {appName}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#fundilinkNavbar"
          aria-controls="fundilinkNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="fundilinkNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {links.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li className="nav-item ms-lg-3">
              <NavLink
                to="/add-provider"
                className="btn btn-danger"
              >
                Join Us
              </NavLink>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </nav>
  );
}

export default NavBar;
