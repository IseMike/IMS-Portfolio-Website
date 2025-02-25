import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactMeButton from '../components/ContactMeButton';

function SocialPage({ isNewStyle }) {
      return (
            <div className={isNewStyle ? "new-social-container" : "social-container"}>
                  {!isNewStyle && <h1>Socials</h1>}
                  <div className={isNewStyle ? "new-social-content" : "social-content"}>
                        <div className={isNewStyle ? "new-social-icons" : "social-icons"}>
                              <a href="https://www.linkedin.com/in/isaac-shepherd-3957031aa/">
                                    <FontAwesomeIcon icon={faLinkedin} size={isNewStyle ? '2x' : '5x'} color='#0072b1' />
                              </a>
                              <a href='https://github.com/IseMike'>
                                    <FontAwesomeIcon icon={faGithub} size={isNewStyle ? '2x' : '5x'} color='black' />
                              </a>
                        </div>
                        <div className={isNewStyle ? "new-contact-button-container" : "contact-button-container"}>
                              <ContactMeButton isNewStyle={isNewStyle} />
                        </div>
                  </div>
            </div>
      );
}

export default SocialPage;