import React from "react";

function Projects(props) {
  return (
    <div className="Projects snap" id="projects">
      <div className="proj-styles">
        <div className="project project1">
          <h2>
            <a href="https://plant-party.netlify.com" target="_blank">
              plant party.
            </a>
          </h2>
        </div>
        <div className="project project2">
          <h2>
            <a href="https://myllies-api-project.netlify.com" target="_blank">
              ironmakeup.
            </a>
          </h2>
        </div>
        <div className="project project3">
          <h2>
            <a
              href="https://mylliejohnson.github.io/my-bubble-game-js/index.html"
              target="_blank"
            >
              bubble pop.
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
