import React, { FunctionComponent } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

interface FooterPorps {
  copyrightContent: string;
}

export const Footer: FunctionComponent<FooterPorps> = ({
  copyrightContent,
}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className={"fixed-bottom"}>
        <Container>
          <Navbar.Brand href="#home">{copyrightContent}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
