import React from "react";
import { MdDeveloperMode } from "react-icons/md";
function Header(props) {
  return (
    <header className="header">
      <MdDeveloperMode />
      {props.title}
    </header>
  );
}

export default Header;
