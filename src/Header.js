import React from "react";

const Header = () => {
  return (
    <header className="header-container p-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="mb-0">Xam Cluster</h1>
        <div>
          <strong>Welcome, User</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
