// import router from '@/router';
// import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Main from './pages/Main/Main';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import End from './pages/End/End';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';

function App() {
  return (
    <HelmetProvider>
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <End />
    </HelmetProvider>
  );
}

export default App;
