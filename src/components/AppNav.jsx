import { memo } from 'react';
// import { NavLink } from 'react-router-dom';
// import { navigationItems } from '@/router';
// import AboutMe from '@/pages/AboutMe/AboutMe';
// import Skills from '@/pages/Skills/Skills';
// import Projects from '@/pages/Projects/Projects';

function AppNav() {
  const navData = ['aboutMe', 'skills', 'projects', 'education'];

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView();
  };

  return (
    <nav className="flex justify-between fixed w-full">
      <h2 className="sr-only">페이지 탐색 네비게이션</h2>

      <button onClick={() => handleScroll('main')}>yerin</button>

      <ul className="flex gap-2">
        {navData.map((data, index) => (
          <li key={index}>
            <button onClick={() => handleScroll(data)}>{data}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default memo(AppNav);
