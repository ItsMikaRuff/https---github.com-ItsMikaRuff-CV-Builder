// NavBar.jsx

import { Logo, NavBarStyle, NavLinkItem, NavLinks, StyledLink } from "./StyledComponents";

function Navbar() {
  return (
    <NavBarStyle>
      <Logo>CV Builder</Logo>
      <NavLinks>
        <NavLinkItem><StyledLink to="/edit-cv-page">Edit CV</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/preview-cv">View CV</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/settings">Settings</StyledLink></NavLinkItem>
      </NavLinks>
    </NavBarStyle>
  );
}

export default Navbar;