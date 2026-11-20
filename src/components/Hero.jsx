function Hero() {
  return (
    <section
    id="home"
    className="hero d-flex align-items-center justify-content-center"
    style={{ height: '100vh', backgroundColor: '#92c067' }}
  >
    <div className="container text-center">
      <h1 className="display-4">Welcome to Fundilink</h1>
      <h2 className="h3 mb-4">Find Trusted Home Service Providers</h2>
      <p className="lead">Connect with reliable plumbers, electricians,
          cleaners, carpenters, and other skilled
          professionals near you</p>
      <a href="#services" className="btn btn-primary btn-lg mt-3">Explore Services</a>
    </div>
  </section>
  );
}

export default Hero;