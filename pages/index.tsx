import type { NextPage } from "next";
import { useState } from "react";
import Project from "../components/project";
import projects from "./api/projects.json";
import Darkmode from "darkmode-js";

const Home: NextPage = () => {
  const dmOptions = { autoMatchOsTheme: false };
  const dm = new Darkmode(dmOptions);
  const showEmail = (e: any) => {
    e.preventDefault();
    const emailArr = ["contact", "jecsham"];
    const finalEmail = `${emailArr[0]}@${emailArr[1]}.com`;
    setEmail(<a href={`mailto:${finalEmail}`}>{finalEmail}</a>);
  };

  const toggleDarkMode = () => {
    dm.toggle();
  };

  const [email, setEmail] = useState(
    <a onClick={showEmail} href="#">
      show
    </a>
  );

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <main className="container">
        <div className="header">
          <h1>Jecsham Castillo</h1>
          <div id="header-btns">
            <button
              onClick={() => openLink("/donate")}
              className="round-btn"
              title="Donate"
            >
              <span className="darkmode-ignore">💚</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="round-btn"
              title="Change theme"
            >
              <span className="darkmode-ignore">🌓</span>
            </button>
          </div>
        </div>
        <div className="section-content">
          <p className="mt-0">
            Full Stack Developer <span className="darkmode-ignore">👨‍💻</span>
          </p>
        </div>
        <div>
          <h2>About me</h2>
          <div className="section-content">
            <p>
              Im passionate about software development. <br />I work
              professionally as DevOps Engineer but I also like to develop
              general purpose software and web platforms. <br />I consider
              myself a Fullstack Developer.
            </p>
          </div>
        </div>

        <div>
          <h2>Some of my work</h2>
          <div className="section-content">
            {projects.map((project, i) => (
              <Project key={i} {...project} />
            ))}
            <p>
              Also check out my{" "}
              <a
                href="https://platzi.com/p/jecsham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Platzi
              </a>{" "}
              profile to see some of the courses I have taken
            </p>
          </div>
        </div>

        <div>
          <h2>
            Keep in touch <span className="darkmode-ignore">✉️</span>
          </h2>
          <div className="section-content">
            <p>
              <strong>Social: </strong>
              <a
                href="https://github.com/jecsham"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {" - "}
              <a
                href="https://twitter.com/jecsham"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              {" - "}
              <a
                href="https://www.linkedin.com/in/jecsham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <strong>Email:</strong> [{email}]
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
