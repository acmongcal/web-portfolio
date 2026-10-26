import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="page-not-found" aria-labelledby="page-not-found-title">
      <h1 className="page-header" id="page-not-found-title">
        Page Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="button-53">
        Return Home
      </Link>
    </section>
  );
}

export default PageNotFound;
