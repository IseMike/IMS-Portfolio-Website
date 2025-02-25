import profilePicture from '../assets/img/profile_picture.jpg';

function AboutMePage({ isNewStyle }) {
      return (
            <div className={isNewStyle ? "new-about-me-container" : "about-me-container"}>
                  <div className={isNewStyle ? "new-section-inline" : "section-inline"}>
                        <img
                              src={profilePicture}
                              alt="Me"
                              className={isNewStyle ? "new-profile-picture" : "profile-picture"}
                        />
                        <div className={isNewStyle ? "new-about-me-text" : "about-me-text"}>
                              <h2>Isaac Shepherd</h2>
                              <p>
                                    Hey there, My name is Isaac Shepherd. I'm a recent NuCamp Graduate with a bachelor's in computer science.
                                    I have a solid foundation in web and app design and love working on exciting and challenging projects.
                                    I also have a passion for creating user-friendly experiences and collaborating with driven professionals.
                              </p>
                        </div>
                  </div>
            </div>
      );
}

export default AboutMePage;