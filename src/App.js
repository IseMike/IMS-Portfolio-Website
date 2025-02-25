import './App.css';
import './NewStyle.css';
import AboutMePage from './pages/AboutMePage';
import EducationPage from './pages/EducationPage';
import SocialPage from './pages/SocialPage';
import ProjectPage from './pages/ProjectPage';
import Slideshow from './feature/slideshow/Slideshow';
import 'font-awesome/css/font-awesome.css';
import { useState } from 'react';

function App() {
      const [isNewStyle, setIsNewStyle] = useState(false);

      const toggleStyle = () => {
            setIsNewStyle(!isNewStyle);
      };

      return (
            <div className={isNewStyle ? 'new-body' : ''}>
                  <button onClick={toggleStyle} className={isNewStyle ? 'new-toggle-style-button' : 'toggle-style-button'}>
                        New Me
                  </button>
                  {!isNewStyle ? (
                        <div>
                              <div className="section">
                                    <h1>About Me</h1>
                                    <AboutMePage isNewStyle={isNewStyle} />
                              </div>
                              <div className="section">
                                    <h1>Education</h1>
                                    <div className="section-inline">
                                          <div className='education-container'>
                                                <EducationPage isNewStyle={isNewStyle} />
                                          </div>
                                          <div className='slideshow-container'>
                                                <Slideshow isNewStyle={isNewStyle} />
                                          </div>
                                    </div>
                              </div>
                              <div className='section'>
                                    <div className='section-inline'>
                                          <ProjectPage isNewStyle={isNewStyle} />
                                          <SocialPage isNewStyle={isNewStyle} />
                                    </div>
                              </div>
                        </div>
                  ) : (
                        <div className="new-style-content">
                              <header className="new-header">
                                    <h1>My Portfolio</h1>
                              </header>
                              <main className="main-content">
                                    <section className="new-about-me">
                                          <h2>About Me</h2>
                                          <AboutMePage isNewStyle={isNewStyle} />
                                    </section>
                                    <section className="new-section">
                                          <h2>Education</h2>
                                          <div className="new-education-content">
                                                <EducationPage isNewStyle={isNewStyle} />
                                                <Slideshow isNewStyle={isNewStyle} />
                                          </div>
                                    </section>
                                    <section className="new-section">
                                          <h2>Projects</h2>
                                          <ProjectPage isNewStyle={isNewStyle} />
                                    </section>
                              </main>
                              <footer className="new-footer">
                                    <SocialPage isNewStyle={isNewStyle} />
                                    <p>&copy; 2025 My Portfolio</p>
                              </footer>
                        </div>
                  )}
            </div>
      );
}

export default App;
