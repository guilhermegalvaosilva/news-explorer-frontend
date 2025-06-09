import "./About.css";
import author from "../../Mypic.jpeg";

function About({}) {
  return (
    <section className="about">
      <div className="about__content">
        <img className="about__img" src={author} alt="Tia Giron" />
        <div className="about__author">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Tia Giron is a University of Texas at Austin Master's graduate
            pursuing a career in tech. She has studied technical skills through
            TripleTen's Software Engineering Program and has received other
            certificates through SheCodes, EdX, and CourseEra. She has a strong
            foundation in JavaScript spanning multiple libraries and frameworks
            such as React, Node, and Express. She also has a strong familiarity
            with skills such as using GitHub, Object-Oriented Programming,
            connecting and building APIs, scaffolding a web application from
            scratch, and using Figma to design and build a site according to
            industry standards.
          </p>
          <p className="about__description">
            Tia loves working with a team, collaborating with clients to build
            their perfect website, and is constantly learning and developing new
            skills as the world of tech evolves rapidly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
