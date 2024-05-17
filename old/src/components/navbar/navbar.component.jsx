import { Outlet } from "react-router-dom";
import {
  faListCheck,
  faGrip,
  faPlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import NavbarItem from "../navbar-item/navbar-item.component";

import { NavbarContainer } from "./navbar.styles";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarItem to="/" title="Home" icon={faHouse} />
        <NavbarItem to="/tasks" title="Tasks" icon={faListCheck} />
        <NavbarItem title="Lists" icon={faGrip} />
        <NavbarItem title="New" icon={faPlus} />
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
