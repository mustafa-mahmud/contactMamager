import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1 className="display-4">404 Page</h1>
      <p className="lead">Sorry that page does not exist</p>
      <Link to="/" className="btn btn-block btn-secondary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
