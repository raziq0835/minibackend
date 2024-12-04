import './home.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
// import {Link} from 'react-router-dom'









const HomePage = () => {
    return (
      <div className="homepage">
        <Header />
  
        <main className="homepage-main">
          <section className="links-section">
            <h2>Explore the System</h2>
            <div className="links-container">
              <div className="link-item">
                <a href="https://officialcollegewebsite.com" target="_blank" rel="noopener noreferrer">Official College Website</a>
              </div>
              <div className="link-item">
                <a href="http://localhost:5173/path">Find Path</a>
              </div>
              <div className="link-item">
                <a href="http://localhost:5173/path">college review</a>
              </div>
              <div className="link-item">
                <a href="/detailed-map">Detailed Map</a>
              </div>
              <div className="link-item">
                <a href="/find-faculties">Find Faculties</a>
              </div>
              <div className="link-item">
                <a href="/about">About Us</a>
              </div>
              <div className="link-item">
                <a href="/contact">Contact</a>
              </div>
            </div>
          </section>
  
          <section className="instructions">
            <h2>How It Works</h2>
            <p>
              Use the navigation links above to explore various features of the system. Whether you need to find a path,
              view a detailed map, or learn more about the faculty, we've got you covered.
            </p>
          </section>
        </main>
  
        <Footer />
      </div>
    );
  };
  
  export default HomePage;
  