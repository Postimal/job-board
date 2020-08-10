import React from 'react';
import { Title, RecruitmentBoard, ScrollToTopButton } from 'components';

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <Title title="Aktualne procesy rekrutacyjne" />
      </header>
      <main>
        <RecruitmentBoard />
        <ScrollToTopButton />
      </main>
    </div>
  );
}

export default App;
