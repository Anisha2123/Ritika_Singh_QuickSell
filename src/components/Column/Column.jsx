import React from 'react';
import Card from '../Card/Card';
import './Column.css';
import todosvg from '../../utils/Todo.svg';
import inprogresssvg from '../../utils/inprogress.svg';
import backlog from '../../utils/Backlog.svg';
import donesvg from '../../utils/Done.svg';
import canceldsvg from '../../utils/Cancelled.svg';
const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'todo':
      return todosvg;
      case 'backlog':
      return backlog;
    case 'in progress':
      return inprogresssvg;
    case 'done':
      return donesvg;
    case 'cancelled':
      return canceldsvg;
    default:
      return '📌';
  }
};
export default function Column({ title, icon, tickets }) {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          {icon && <span className="icon">{icon}</span>}
          <span><img src={getStatusIcon(tickets[0].status)}/></span>
          <span>{title}</span>
          <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <button className="action-button">+</button>
          <button className="action-button">⋮</button>
        </div>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}