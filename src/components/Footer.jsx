import { useAppContext } from "../context/AppContext.jsx";
function Footer() {
    const { appName } = useAppContext();
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
            <h5>{appName}</h5>
            <p>
              Connecting you with trusted home service
              professionals across Kenya
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">Home</a>
              </li>
              <li>
                <a href="/#services" className="text-white">Services</a>
              </li>
              <li>
                <a href="/about" className="text-white">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>Nairobi, Kenya</p>
            <p>Find trusted professionals near you</p>
          </div>

        </div>

        <p className="text-center mb-0">
          © {new Date().getFullYear()} {appName}
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
