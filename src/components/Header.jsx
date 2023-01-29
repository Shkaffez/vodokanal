import React from 'react';
import Container from "react-bootstrap/Container";
import PhoneModal from './PhoneModal';


const Header = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className='me-5'><a href="tel:+74951234567">+7 (495) 123-45-67</a></div>
      <div className='me-5'>График работы <br /> без выходных с 9-00 до 21-00</div>
      <PhoneModal />
    </Container>
  );
}

export default Header;
