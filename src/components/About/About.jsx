import "./About.css";
import author from "../../assets/IMG_4127.jpeg";

function About({}) {
  return (
    <section className="about">
      <div className="about__content">
        <img className="about__img" src={author} alt="Guilherme" />
        <div className="about__author">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            I'm Guilherme Galvão, a web developer with a strong background in
            JavaScript, React, Node.js, Express and MongoDB, graduated from
            TripleTen's Full Stack Web Development program. Throughout my
            journey, I have built end-to-end applications following software
            engineering best practices, agile methodologies and systems
            integration. I have experience creating responsive interfaces,
            structured backend development and working with REST APIs, always
            focusing on code quality, scalability and organization.
          </p>
          <p className="about__description">
            My passion for technology began early when I studied robotics, and
            it has grown into a deep interest in intelligent systems and
            building digital solutions. Today, I am consolidating this path
            through continuous learning and practical projects, including my
            current degree in Computer Science.
          </p>
          <p className="about__description">
            Professionally, my experience at companies such as OGMA – Indústria
            Aeronáutica, Lidl, Worten and AWA has shown me the value of
            precision, data analysis, process integration and teamwork. I have
            worked in demanding environments dealing with internal systems, ERP,
            operational coordination and technical support — skills that now
            enrich how I develop software and solve problems.
          </p>
          <p className="about__description">
            I am driven by challenges, continuous learning and the opportunity
            to create solutions that make a difference. I especially enjoy
            working in collaborative environments where I can contribute both
            technically and to the continuous improvement of processes.
            Currently, my focus is to begin my professional journey as a web
            developer, applying my skills to build efficient, intuitive digital
            products with real impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
