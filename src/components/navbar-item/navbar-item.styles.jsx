import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const NavbarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarItemIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
`;

export const NavbarItemHeader = styled.h3`
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
