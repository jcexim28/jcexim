import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <>
      <NavigationBar />
      <img
        id="home"
        src="https://s29755.pcdn.co/wp-content/uploads/2019/08/MSC-Gulsun-containership-container-ship-boxship-boxship-supplied-credit-MSC.jpg.optimal.jpg"
        class="container-fluid"
        alt="..."
      />
      <img
        id="contact"
        src="https://s29755.pcdn.co/wp-content/uploads/2019/08/MSC-Gulsun-containership-container-ship-boxship-boxship-supplied-credit-MSC.jpg.optimal.jpg"
        class="container-fluid"
        alt="..."
      />
      <img
        id="about"
        src="https://s29755.pcdn.co/wp-content/uploads/2019/08/MSC-Gulsun-containership-container-ship-boxship-boxship-supplied-credit-MSC.jpg.optimal.jpg"
        class="container-fluid"
        alt="..."
      />
      <img
        id="product1"
        src="https://s29755.pcdn.co/wp-content/uploads/2019/08/MSC-Gulsun-containership-container-ship-boxship-boxship-supplied-credit-MSC.jpg.optimal.jpg"
        class="container-fluid"
        alt="..."
      />
    </>
  );
}

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">JC Exim Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#product1">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#product2">Product 2</NavDropdown.Item>
              <NavDropdown.Item href="#product3">Product 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Product 3.3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
