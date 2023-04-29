import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../provider/Authprovider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () =>{
    logOut().then()
    .catch(error => console.log(error.message))
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto align-items-center gap-2">
                <Link to="/">Home</Link>
              <Link to="#pricing">About</Link>
              <Link to="#pricing">Career</Link>
            </Nav>
            <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}
              {user ? (
                <Link>
                  <Button  onClick={handleLogOut} variant="secondary">LogOut</Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">LogIn</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
