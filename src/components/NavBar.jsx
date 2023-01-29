import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import styles from './NavBar.module.css';


const NavBar = () => {
  return (

    <Container>
      <Nav className={styles.navBar}>
        <Nav.Item className={styles.navItem}>
          <Nav.Link className={styles.navText}>Услуги</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.navItem}>
          <Nav.Link className={styles.navText}>О компании</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.navItem}>
          <Nav.Link className={styles.navText}>Наши работы</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.navItem}>
          <Nav.Link className={styles.navText}>Контакты</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container >
  );
}

export default NavBar;
