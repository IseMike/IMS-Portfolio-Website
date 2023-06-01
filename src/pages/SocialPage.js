import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialPage() {
      return (
            <div className="social-container">
                  <div className="social-content">
                        <a href="https://www.linkedin.com/in/isaac-shepherd-3957031aa/">
                              <FontAwesomeIcon icon={faLinkedin} size='5x' color='#0072b1' />
                        </a>
                        <a href='https://github.com/IseMike'>
                              <FontAwesomeIcon icon={faGithub} size='5x' color='black' />
                        </a>
                  </div>
            </div>
      );
}

export default SocialPage;