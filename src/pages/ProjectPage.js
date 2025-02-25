const ProjectPage = ({ isNewStyle }) => {
      return (
            <div className={isNewStyle ? "new-project-container" : "project-container"}>
                  <h1>Projects</h1>
                  <div className={isNewStyle ? "new-project-content" : "project-content"}>
                        <ul>
                              <li>
                                    <span className={isNewStyle ? "new-project-item" : "project-item"}>
                                          <a className={isNewStyle ? "new-link" : "link"} href="https://github.com/IseMike/IMS-Portfolio-Website">
                                                This Website
                                          </a>
                                          <p>A React application displaying my portfolio.</p>
                                          <p>React, Javascript, Git, HTML, CSS</p>
                                    </span>
                              </li>
                              <li>
                                    <span className={isNewStyle ? "new-project-item" : "project-item"}>
                                          <a className={isNewStyle ? "new-link" : "link"} href="https://github.com/IseMike/Nucamp-Mock-Up-React-Native">
                                                Mock-up Mobile App
                                          </a>
                                          <p>A React Native app of a mock restaurant.</p>
                                          <p>React Native, Javascript, Redux</p>
                                    </span>
                              </li>
                              <li>
                                    <span className={isNewStyle ? "new-project-item" : "project-item"}>
                                          <a className={isNewStyle ? "new-link" : "link"} href="https://github.com/IseMike/Nucamp-Mock-up-React">
                                                Mock-up React Website
                                          </a>
                                          <p>A website for a mock restaurant built in React.</p>
                                          <p>React, Javascript, Redux, CSS</p>
                                    </span>
                              </li>
                              <li>
                                    <span className={isNewStyle ? "new-project-item" : "project-item"}>
                                          <a className={isNewStyle ? "new-link" : "link"} href="https://github.com/IseMike/Nucamp-Mock-up">
                                                Mock-up Website
                                          </a>
                                          <p>A mock restaurant's website built with HTML, CSS, and JavaScript.</p>
                                          <p>HTML, CSS, JavaScript</p>
                                    </span>
                              </li>
                        </ul>
                  </div>
            </div>
      );
}

export default ProjectPage;