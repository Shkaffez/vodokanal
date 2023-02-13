import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';


const NavBar = () => {
  return (
    <Navbar sticky="top" expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} className={styles.navBrand} to="/home">
          <img
            src="/new-logo-vodokanalsbit.png"
            width="250"
            max-height="100%"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle label="Меню" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.navBar}>
            <Nav.Link as={Link} className={styles.navText} to="/services">Услуги</Nav.Link>
            <Nav.Link as={Link} className={styles.navText} to="/about">О компании</Nav.Link>
            <Nav.Link as={Link} className={styles.navText} to="/ourwork">Наши работы</Nav.Link>
            <Nav.Link as={Link} className={styles.navText} to="/contacts">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default NavBar;
