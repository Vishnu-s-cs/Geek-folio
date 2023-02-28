import React from "react";
import { Link } from "react-router-dom";
import './error.scss';
import Button from '@mui/material/Button';

function Error() {
  return (
    <>
      
      <div className="container">
        <Link
          to="/"
          style={{textDecoration:'none'}}
        >
        <Button variant="contained" href="#contained-buttons"  className="button">
        Go Home
      </Button>
         
        </Link>
        
          {/* <img className="errImg" src={errImg} alt="Page not found" /> */}
        
      </div>
    </>
  );
}

export default Error;
