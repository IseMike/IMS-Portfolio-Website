import profilePicture from '../assets/img/profile_picture.jpg';

function AboutMePage({ isNewStyle, toggleStyle }) {
      return (
            <div className={isNewStyle ? "new-about-me-container" : "about-me-container"}>
                  {isNewStyle && <h2 className="new-about-me-heading">About Me</h2>}
                  <div className={isNewStyle ? "new-section-inline" : "section-inline"}>
                        <img
                              src={profilePicture}
                              alt="Me"
                              className={isNewStyle ? "new-profile-picture" : "profile-picture"}
                        />
                        <div className={isNewStyle ? "new-about-me-text-container" : "about-me-text"}>
                              <h2>Isaac Shepherd</h2>
                              <p>
                                    I'm a Software Engineer with hands-on experience in full-stack development, 
                                    specializing in mobile and web applications. With a bachelor's in Computer Science 
                                    and comprehensive training from NuCamp's bootcamp programs, I've developed a strong 
                                    foundation in modern development practices and technologies.
                              </p>
                              <p>
                                    My recent work at SoBet has given me practical experience with React Native, 
                                    TypeScript, and backend technologies, while my education has equipped me with 
                                    a solid theoretical background. I'm passionate about creating efficient, 
                                    user-friendly applications and working in collaborative, fast-paced environments.
                              </p>
                              {!isNewStyle && (
                                    <button onClick={toggleStyle} className="toggle-style-button">
                                          {isNewStyle ? 'Downgrade' : 'Upgrade'}
                                    </button>
                              )}
                        </div>
                  </div>
            </div>
      );
}

export default AboutMePage;