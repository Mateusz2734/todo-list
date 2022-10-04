import {
  NavbarItemContainer,
  NavbarItemIcon,
  NavbarItemHeader,
  StyledLink,
} from "./navbar-item.styles";

const NavbarItem = ({ title, icon, to }) => {
  return (
    <StyledLink to={to}>
      <NavbarItemContainer>
        <NavbarItemIcon icon={icon} />
        <NavbarItemHeader>{title}</NavbarItemHeader>
      </NavbarItemContainer>
    </StyledLink>
  );
};

export default NavbarItem;
