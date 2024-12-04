import './footer.css'


const Footer = () => (
    <footer className="homepage-footer">
      <div className="footer-info">
        <p>&copy; 2024 College Navigation System. All rights reserved.</p>
        <p>Email: support@collegenavigation.com | Phone: +123 456 7890</p>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </div>
    </footer>
  );

  export default Footer