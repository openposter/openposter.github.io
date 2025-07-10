import React from 'react';
import HomePage from './components/HomePage';
import DocsPage from './components/DocsPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  if (currentPage === 'docs') {
    return <DocsPage onNavigate={setCurrentPage} />;
  }

  return <HomePage onNavigate={setCurrentPage} />;
}

export default App;