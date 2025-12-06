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
            Sou o Guilherme Galvão, desenvolvedor web com uma forte base em
            JavaScript, React, Node.js, Express e MongoDB, formado pelo programa
            de Desenvolvimento Web Full Stack da TripleTen. Ao longo do meu
            percurso, desenvolvi aplicações completas, seguindo boas práticas de
            engenharia de software, metodologias ágeis e integração de sistemas.
            Tenho experiência na criação de interfaces responsivas,
            desenvolvimento backend estruturado e utilização de APIs REST,
            sempre com foco na qualidade, escalabilidade e organização do
            código.
          </p>
          <p className="about__description">
            A minha paixão por tecnologia começou cedo, quando estudei robótica,
            e evoluiu para um interesse profundo por sistemas inteligentes e
            construção de soluções digitais. Hoje, estou a consolidar esse
            caminho através de formação contínua e projetos práticos, incluindo
            a minha atual graduação em Ciências da Computação.
          </p>
          <p className="about__description">
            Profissionalmente, a minha experiência em empresas como OGMA –
            Indústria Aeronáutica, Lidl, Worten e AWA mostrou-me o valor da
            precisão, da análise de dados, da integração de processos e do
            trabalho em equipa. Atuei em ambientes exigentes, lidando com
            sistemas internos, ERP, coordenação operacional e suporte técnico —
            competências que hoje enriquecem a forma como desenvolvo software e
            resolvo problemas.
          </p>
          <p className="about__description">
            Sou movido por desafios, aprendizagem constante e pela oportunidade
            de criar soluções que façam a diferença. Gosto especialmente de
            trabalhar em ambientes colaborativos, onde posso contribuir tanto
            tecnicamente quanto na melhoria contínua de processos. Atualmente, o
            meu foco é iniciar a minha jornada profissional como desenvolvedor
            web, aplicando as minhas habilidades para construir produtos
            digitais eficientes, intuitivos e com impacto real.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
