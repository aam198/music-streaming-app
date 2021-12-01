import { Button } from "react-bootstrap";

export default function Header() {


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

    <Button
      id="btnUpload"
      className = "btn margin"
      variant ="primary"
      >
        Upload Song
      </Button>

    </div>
  );
}