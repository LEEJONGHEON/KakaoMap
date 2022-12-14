import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="Mainpage">메인 페이지</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Emergency">응급실</Nav.Link>
            <Nav.Link href="Hospital">병원</Nav.Link>
            <Nav.Link href="Aed">자동제세동기(AED)</Nav.Link>
            <Nav.Link href="Rescue">응급처치방법</Nav.Link>
            <Nav.Link href="MapPicture">지도</Nav.Link>
            <Nav.Link href="Map">지도2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;