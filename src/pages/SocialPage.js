import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactMeButton from '../components/ContactMeButton';

function SocialPage() {
      return (
            <div className="social-container">
                  <h1>Socials</h1>
                  <div className="social-content">
                        <a href="https://www.linkedin.com/in/isaac-shepherd-3957031aa/">
                              <FontAwesomeIcon icon={faLinkedin} size='5x' color='#0072b1' />
                        </a>
                        <a href='https://github.com/IseMike'>
                              <FontAwesomeIcon icon={faGithub} size='5x' color='black' />
                        </a>
                        <ContactMeButton />
                  </div>
            </div>
      );
}

export default SocialPage;