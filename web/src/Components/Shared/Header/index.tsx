import React, { FunctionComponent } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

interface HeaderPorps {
  title: string;
}

export const Header: FunctionComponent<HeaderPorps> = ({ title }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
