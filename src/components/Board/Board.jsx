import React from 'react';
import { useKanban } from '../../hooks/useKanban';
import Column from '../Column/Column';
import './Board.css';

export default function Board() {
  const { groupedTickets, loading, error } = useKanban();

  if (loading) return <div className="board-message">Loading...</div>;
  if (error) return <div className="board-message error">{error}</div>;

  return (
    <div className="board">
      {groupedTickets.map((group, index) => (
        <Column 
          key={index}
          title={group.title}
          icon={group.icon}
          tickets={group.tickets}
        />
      ))}
    </div>
  );
}