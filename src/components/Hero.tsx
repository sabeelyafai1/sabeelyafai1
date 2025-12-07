import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Sabeel Yafai</span>
            </h1>
            <p className="hero-subtitle">Data Scientist & MLOps Engineer</p>
            <p className="hero-tagline">
              Building scalable, production-ready AI solutions
            </p>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
}

export default Hero;
