import "./About.css";
import author from "../../assets/Mypic.jpeg";

function About({}) {
  return (
    <section className="about">
      <div className="about__content">
        <img className="about__img" src={author} alt="Tia Giron" />
        <div className="about__author">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hi! My name is Guilherme Galvão, I'm 24 years old and I currently
            live in Portugal. I've always been passionate about technology —
            back in school, I studied robotics, which sparked my curiosity about
            how things work and how to build smart systems. I'm currently
            completing the Web Development program at TripleTen, where I’ve
            gained solid experience in HTML, CSS, JavaScript, React, Node.js,
            Express, MongoDB, and working with RESTful APIs. Through hands-on
            projects and real-world simulations, I've learned how to build
            full-stack applications from scratch, write clean and maintainable
            code, and follow best practices in version control, asynchronous
            programming, and responsive design. I enjoy learning, exploring new
            ideas, and working on creative projects, especially those related to
            web development and automation. Outside of tech, I love to travel
            and experience new cultures, which inspires me to stay open-minded
            and constantly seek growth. I'm now focused on starting my
            professional journey as a web developer and contributing to
            meaningful, innovative projects.
          </p>
          <p className="about__description">
            I enjoy working in collaborative environments, and my experience at
            Embraer has taught me the value of teamwork, precision, and
            innovation. I’m passionate about building meaningful digital
            experiences and constantly developing new skills as the tech world
            evolves.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
