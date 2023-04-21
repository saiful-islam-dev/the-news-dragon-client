import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/qZone1.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebookF/>Facebook</ListGroup.Item>
          <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
          <ListGroup.Item><FaTwitter/>twitter</ListGroup.Item>
        </ListGroup>
        <QZone/>

        <div>
            <img src={bg} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
