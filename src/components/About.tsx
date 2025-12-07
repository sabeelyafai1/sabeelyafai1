import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I am a passionate Data Scientist with a strong specialization in MLOps,
            combining expertise in Machine Learning, Deep Learning, and NLP to build
            scalable, production-ready AI solutions. With solid proficiency in Python
            and a deep understanding of ML algorithms, I enjoy transforming complex
            problems into intelligent, data-driven products.
          </p>
          <p className="about-text">
            I have hands-on experience designing and implementing CI/CD pipelines using
            GitHub Actions, as well as deploying machine learning models on cloud platforms
            such as AWS Elastic Beanstalk, AWS EC2, Azure Web Apps, Azure Container Registry,
            and Docker. My MLOps toolkit also includes MLflow, DAGsHub, BentoML, and building
            ETL pipelines with MongoDB Atlas.
          </p>
          <p className="about-text highlight">
            I'm driven by a continuous desire to learn, innovate, and deliver reliable ML
            systems that bridge the gap between data science and real-world deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
