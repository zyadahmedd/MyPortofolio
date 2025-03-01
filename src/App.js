import React from 'react';

import PageComponent from './PageComponent/PageComponent';
import SkillsComponent from "./PageComponent/SkillsComponent";
import ProjectsComponent from './PageComponent/ProjectsComponent';
import ContactComponent from './PageComponent/ContactComponent';

function App() {
  return (
        <div>
          <PageComponent />
          <SkillsComponent />
          <ProjectsComponent/>
          <ContactComponent/>
        </div>
  );
}

export default App;
