// import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default function Header() {

    const { isAuthenticated } = useAuth0;

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">

      
      <h5 className="my-0 mr-md-auto font-weight-normal">
        Music Streaming App with Auth0 and Cloudinary
      </h5>
    
      <nav className = "my-2 my-md-0 mr-md-3">
        <a className = "p-2 text-success" href="/">HOME</a>
        <a className = "p-2 text-danger" href="/">TRENDING</a>
        <a className = "p-2 text-info" href="/">TOP SONGS</a>
      </nav>
    
      {isAuthenticated ? (
            <>
              <div>
                <Button
                  id="btnUpload"
                  className="btn margin"
                  variant="primary"
                >
                  Upload Song
                </Button>
                &nbsp;&nbsp;
                <LogoutButton />
              </div>
            </>
          ) : (
            <LoginButton />
          )}
    </div>
  );
}