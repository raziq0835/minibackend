import './header.css'
import mitlogo from '../../assets/mitheadimg.png'


const Header = () => (
    <header className="homepage-header">
      <div className="header-logo">
        <img src={mitlogo} alt="College Logo" className="logo" />
      </div>
      <div className="header-content">
        <h1>Welcome to College Navigation System</h1>
        <p>Your one-stop solution for navigating the campus and accessing college resources.</p>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* <li><a href="/events"></a></li> */}
        </ul>
      </nav>
    </header>
  );

  export default Header