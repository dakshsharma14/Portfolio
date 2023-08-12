import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> My Name Is Daksh</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>

          <a
            href="https://www.linkedin.com/in/daksh-sharma-099a22229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:dakshsharma0214@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/dakshsharma14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <div class="center-container">
          <centre>
            <p>
              <b>Programming languages: </b>Java, JavaScript, Python, Ruby on
              rails, TypeScript.{" "}
            </p>
            <p>
              <b>ML Frameworks:</b> NumPy, Pandas, matplotlib, scikit learn,
              Jupyter Notebooks, Anaconda.{" "}
            </p>
            <p>
              <b>BI tools:</b> Weka, Tableau, PowerBI.
            </p>
            <p>
              <b>Frameworks:</b> React.js, Node.js, Express, REST API,
              Bootstrap, JPA, JSF, EJB
            </p>{" "}
            <p>
              <b>Databases Management:</b> Microsoft SQL Server, MySQL, MongoDB,
              Oracle, PostgreSQL.
            </p>
            <p>
              <b>Development Software:</b> Android Studio, PyCharm, IntelliJ
              IDEA, Postman.
            </p>
            <p>
              <b>Cloud tools:</b> AWS, Microsoft Azure, Kubernetes, and SaaS
              services.{" "}
            </p>
            <p>
              <b>Networking:</b> TCP/IP, routing and switching, VoIP, Exchange,
              Linux, MacOS, and Windows operating system.
            </p>{" "}
            <p>
              <b>Additional skills:</b> Git, Agile Methodologies, Junit,
              dockers, Flask, Jenkins, Selenium, Software Quality Assurance,
              Jira, Zenhub, Confluence
            </p>
          </centre>
        </div>
      </div>
    </div>
  );
}

export default Home;
