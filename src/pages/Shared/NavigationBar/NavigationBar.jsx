import React from 'react';

const NavigationBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user ? 
                  <Link><Button variant="secondary">LogOut</Button></Link>:
                  <Link to="/login"><Button variant="secondary">LogIn</Button></Link>
                  }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;