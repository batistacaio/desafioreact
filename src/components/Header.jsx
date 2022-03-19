import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
<Container>
  <Navbar fixed="top" expand="lg" variant="light" bg="white">
    <Container>
      <Navbar.Brand href="/"> <img src='./images/logo' /> </Navbar.Brand>
    </Container>
  </Navbar>
</Container>
  );
}

export default Header;