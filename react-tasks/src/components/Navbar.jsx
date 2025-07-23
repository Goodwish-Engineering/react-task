import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MiniBlog</Link>
      </div>
      <form className="navbar-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
