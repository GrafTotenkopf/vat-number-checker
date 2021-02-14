import React from "react";
import { Link } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

import { h1 } from "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          VAT number checker
        </Header>
      </Link>
      {children}
    </Container>
  );
};

export default Layout;
