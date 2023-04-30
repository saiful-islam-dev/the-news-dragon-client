import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta odit
        consectetur, pariatur ipsam rem tempore cumque similique facilis
        recusandae soluta incidunt quia voluptatem quis tempora optio numquam
        sequi? Temporibus corrupti possimus tempore tenetur harum doloremque
        beatae, quibusdam saepe consectetur ex?
      </p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  );
};

export default Terms;
