import { Link, useLocation } from "react-router-dom";

function NotFound() {

  const location = useLocation();

  return (
    <div id="notfound">

      <h1>404 - Page Not Found</h1>
      <h4>Try Again ......</h4>

      <h3>Invalid URL:</h3>

      <p>{location.pathname}</p>

      <button>
        <Link to="/">Go To Home</Link>
      </button>

    </div>
  );
}

export default NotFound;