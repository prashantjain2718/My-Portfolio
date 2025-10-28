import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo"><a href='#home'>PJ</a></h1>
        <ul className="nav-list">
            <li className="Home"><a href='#home'>Home</a></li>
            <li className="About"><a href='#about'>About</a></li>
            <li className="Skills"><a href='#skills'>Skills</a></li>
            <li className="Projects"><a href='#projects'>Projects</a></li>
            <li className="Contact"><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}
