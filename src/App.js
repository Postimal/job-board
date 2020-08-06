import React from 'react';
import { Title, RecruitmentBoard } from 'components';

function App() {
  return (
    <>
      <header className="header">
        <Title title="Aktualne procesy rekrutacyjne" />
      </header>
      <main>
        <RecruitmentBoard />
      </main>
    </>
  );
}

export default App;
