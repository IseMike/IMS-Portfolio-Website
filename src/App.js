import './App.css';
import AboutMePage from './pages/AboutMePage';
import EducationPage from './pages/EducationPage';
import SocialPage from './pages/SocialPage';
import ProjectPage from './pages/ProjectPage';
import ContactMePage from './pages/ContactMePage';
import 'font-awesome/css/font-awesome.css';

function App() {
      return (
            <div>
                  <div className="section">
                        <h1>About Me</h1>
                        <AboutMePage />
                        <ContactMePage />
                  </div>
                  <div className="section">
                        <h1>Education</h1>
                        <EducationPage />
                  </div>
                  <div className='section'>
                        <h1>Projects</h1>
                        <ProjectPage />
                  </div>
                  <div className='section'>
                        <h1>Socials</h1>
                        <SocialPage />
                  </div>
            </div>
      );
}

export default App;
