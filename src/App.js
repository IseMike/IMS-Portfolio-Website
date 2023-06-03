import './App.css';
import AboutMePage from './pages/AboutMePage';
import EducationPage from './pages/EducationPage';
import SocialPage from './pages/SocialPage';
import ProjectPage from './pages/ProjectPage';
import Slideshow from './feature/slideshow/Slideshow';
import 'font-awesome/css/font-awesome.css';

function App() {
      return (
            <div>
                  <div className="section">
                        <h1>About Me</h1>
                        <AboutMePage />
                  </div>
                  <div className="section">
                        <h1>Education</h1>
                        <div className="section-inline">
                              <div className='education-conatiner'>
                                    <EducationPage />
                              </div>
                              <div className='slideshow-container'>
                                    <Slideshow />
                              </div>
                        </div>
                  </div>
                  <div className='section'>
                        <div className='section-inline'>
                              <ProjectPage />
                              <SocialPage />
                        </div>
                  </div>
            </div>
      );
}

export default App;
