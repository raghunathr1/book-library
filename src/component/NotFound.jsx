import { Link, useLocation } from "react-router-dom";

function NotFound() {

  const location = useLocation();

  return (
    <div id="notfound">

      <h1>Invalid URL:</h1>
      <p>{location.pathname}</p>
      <br />
      <h2>404 - Page Not Found</h2>
      <h4>Try Again ....With Valid URL</h4>  

      <button id="bcBtn"> <Link to="/">Go To Home</Link> </button>

    </div>
  );
}

export default NotFound;