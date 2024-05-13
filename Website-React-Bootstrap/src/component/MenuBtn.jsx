import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MenuBtn() {
  return (
    <div className="mt-5">
      <Link to="/Menu" className="bg-primary text-white">
        <Button>Our Menu</Button>
      </Link>
    </div>
  );
}

export default MenuBtn;
