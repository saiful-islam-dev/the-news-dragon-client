import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link} from "react-router-dom";
import { AuthContext } from "../../../provider/Authprovider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    createUser(email, password)
    .then(userCredential => {
      const createdUser = userCredential.user;
      console.log(createdUser);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    })
  }



  return (
    <Container className="mx-auto w-25">
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control type="text" name="name" placeholder="name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label= {<>Accept <Link to="/terms">Terms and conditions</Link></>}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secoundry">
          Allready have an Account? <Link to="/login">LogIn</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
