import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Error 404 - Not found :(</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
