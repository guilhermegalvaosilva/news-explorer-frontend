import "./About.css";
import author from "../../assets/authorsquare.png";

function About({}) {
  return (
    <section className="about">
      <div className="about__content">
        <img className="about__img" src={author} alt="Tia Giron" />
        <div className="about__author">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">
            Hi! My name is Guilherme Galvão. I was born in Santo André, Brazil,
            and I've been passionate about technology since I was a child. This
            passion has driven me to explore different areas in tech and
            continuously seek new opportunities to grow. I currently live in
            Portugal and have had the opportunity to travel and experience
            different cultures in countries like England, Spain, the Czech
            Republic, and Poland. These journeys have expanded my worldview and
            inspired me to keep learning and evolving. I'm currently studying
            Web Development at TripleTen, a hands-on and intensive bootcamp
            where I'm building solid skills in HTML, CSS, JavaScript, React,
            Node.js, Express, and MongoDB. Through real projects, I’m learning
            how to create responsive web applications, work with APIs, and build
            both front-end and back-end functionality. I'm especially interested
            in continuing to grow in technology, taking more courses and diving
            deeper into areas like automation and innovation. I'm excited about
            the future and always open to new challenges and opportunities.
          </p>
          <p className="about__description">
            Guilherme enjoys working collaboratively with teams, partnering with
            clients to bring their ideal websites to life. He's always learning
            and expanding his skill set as the tech world continues to evolve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
