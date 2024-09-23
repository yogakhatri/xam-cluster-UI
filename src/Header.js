import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4 p-3 bg-primary text-white rounded">
      <Link to="/" className="text-white text-decoration-none">
        <h1 className="mb-0">Xam Cluster</h1>
      </Link>
      <div>
        <Link to="/user-detail" className="text-white">
          <strong>Welcome, User</strong>
        </Link>
      </div>
    </header>
  );
};

export default Header;
