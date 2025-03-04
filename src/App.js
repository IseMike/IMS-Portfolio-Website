import './App.css';
import './NewStyle.css';
import AboutMePage from './pages/AboutMePage';
import EducationPage from './pages/EducationPage';
import SocialPage from './pages/SocialPage';
import ProjectPage from './pages/ProjectPage';
import Slideshow from './feature/slideshow/Slideshow';
import 'font-awesome/css/font-awesome.css';
import { useState } from 'react';
import WorkHistoryPage from './pages/WorkHistoryPage';

function App() {
      const [isNewStyle, setIsNewStyle] = useState(false);
      const [isDarkMode, setIsDarkMode] = useState(false);

      const toggleStyle = () => {
            setIsNewStyle(!isNewStyle);
            if (!isNewStyle === false) {
                  setIsDarkMode(false);
            }
      };

      const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode);
      };

      return (
            <div className={`${isNewStyle ? 'new-body' : ''} ${isNewStyle && isDarkMode ? 'dark-mode' : ''}`}>
                  {!isNewStyle ? (
                        <div>
                              <div className="section">
                                    <h1>About Me</h1>
                                    <AboutMePage isNewStyle={isNewStyle} toggleStyle={toggleStyle} />
                              </div>
                              <div className="section">
                                    <h1>Education</h1>
                                    <div className="section-inline">
                                          <EducationPage isNewStyle={isNewStyle} />
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
                                    <div className="new-content-row" style={{ 
                                          display: 'flex',
                                          alignItems: 'center'
                                    }}>
                                          <section className="new-section">
                                                <h2>About Me</h2>
                                                <AboutMePage isNewStyle={isNewStyle} toggleStyle={toggleStyle} />
                                          </section>
                                          <div className="new-buttons-section" style={{ 
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                height: '100%',
                                                alignSelf: 'center'
                                          }}>
                                                <button onClick={toggleStyle} className="new-toggle-style-button">
                                                      Downgrade
                                                </button>
                                                <button onClick={toggleDarkMode} className="dummy-button">
                                                      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                                                </button>
                                                <button className="dummy-button">Dummy 2</button>
                                                <button className="dummy-button">Dummy 3</button>
                                          </div>
                                    </div>

                                    <div className="new-content-row">
                                          <section className="new-section">
                                                <h2>Work History</h2>
                                                <WorkHistoryPage isNewStyle={isNewStyle} />
                                          </section>
                                          <section className="new-section">
                                                <h2>Education</h2>
                                                <EducationPage isNewStyle={isNewStyle} />
                                          </section>
                                    </div>

                                    <div className="new-content-row">
                                          <section className="new-section">
                                                <h2>Projects</h2>
                                                <ProjectPage isNewStyle={isNewStyle} />
                                          </section>
                                          <section className="new-section">
                                                <h2>Gallery</h2>
                                                <Slideshow isNewStyle={isNewStyle} />
                                          </section>
                                    </div>
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
