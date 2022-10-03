import { Outlet } from "react-router-dom";

import { NavbarContainer } from "./navbar.styles";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <button>Route 1</button>
        <button>Route 2</button>
        <button>Route 3</button>
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
