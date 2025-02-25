const EducationPage = ({ isNewStyle }) => {
      return (
            <div className={isNewStyle ? "new-education-container" : "education-container"}>
                  <div className={isNewStyle ? "new-education-content" : "education-content"}>
                        <ul>
                              <li className={isNewStyle ? "new-education-item" : ""}>
                                    <span className={isNewStyle ? "new-education-title" : "education-item"}>Nucamp Full Stack Web + Mobile Development</span>
                                    <span className={isNewStyle ? "new-education-date" : "education-date"}>Spring 2023</span>
                              </li>
                              <li className={isNewStyle ? "new-education-item" : ""}>
                                    <span className={isNewStyle ? "new-education-title" : "education-item"}>Nucamp Backend, SQL, and DevOps with Python</span>
                                    <span className={isNewStyle ? "new-education-date" : "education-date"}>Winter 2022</span>
                              </li>
                              <li className={isNewStyle ? "new-education-item" : ""}>
                                    <span className={isNewStyle ? "new-education-title" : "education-item"}>Nucamp Web Development Fundamentals</span>
                                    <span className={isNewStyle ? "new-education-date" : "education-date"}>Fall 2022</span>
                              </li>
                              <li className={isNewStyle ? "new-education-item" : ""}>
                                    <span className={isNewStyle ? "new-education-title" : "education-item"}>East Carolina University, Bachelor of Computer Science</span>
                                    <span className={isNewStyle ? "new-education-date" : "education-date"}>Spring 2020</span>
                              </li>
                        </ul>
                  </div>
            </div>
      );
}

export default EducationPage;