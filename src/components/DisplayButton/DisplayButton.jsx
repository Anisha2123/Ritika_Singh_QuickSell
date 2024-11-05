import React from 'react';
import { useKanban } from '../../hooks/useKanban';
import './DisplayButton.css';

export default function DisplayButton({ isOpen, onToggle }) {
  const { grouping, sorting, setGrouping, setSorting } = useKanban();

  return (
    <div className="display-button-container">
      <button className="display-button" onClick={onToggle}>
        <span className="icon">≡</span> Display
        <span className="arrow">{isOpen ? '▼' : '▲'}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={grouping} 
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={sorting} 
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}