import React from "react";
import { Link } from "@reach/router";

const Header = ({ loggedInUser }) => {
  return (
    <header>
      <Link to="/">
        <h1>nonu-news</h1>
      </Link>
      <p className="user">logged in as {loggedInUser}</p>
    </header>
  );
};

export default Header;
