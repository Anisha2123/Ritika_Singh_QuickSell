// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import { KanbanProvider } from './context/KanbanContext';
import './App.css';

function App() {
  return (
    <KanbanProvider>
      <div className="app">
        <header className="app-header">
          <Header />
        </header>
        <main className="app-content">
          <Board />
        </main>
      </div>
    </KanbanProvider>
  );
}

export default App;
