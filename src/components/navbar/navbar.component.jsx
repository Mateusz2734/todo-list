import { Outlet } from "react-router-dom";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

import NavbarItem from "../navbar-item/navbar-item.component";

import { NavbarContainer } from "./navbar.styles";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarItem title="Tasks" icon={faListCheck} />
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
