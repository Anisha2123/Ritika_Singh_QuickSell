import React from 'react';
import './Card.css';
import urgentsvg from '../../utils/UrgentPrioritycolour.svg';
import highsvg from '../../utils/ImgHighPriority.svg';
import medsvg from '../../utils/ImgMediumPriority.svg'
import lowsvg from '../../utils/ImgLowPriority.svg';
import noprioritysvg from '../../utils/Nopriority.svg';

const priorityIcons = {
  4: { name: 'Urgent', image: urgentsvg },
  3: { name: 'High', image: highsvg },
  2: { name: 'Medium', image: medsvg  },
  1: { name: 'Low', image: lowsvg },
  0: { name: 'No priority', image: noprioritysvg }
};


export default function Card({ ticket }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="profile-pic">
          {/* Profile picture placeholder */}
          <div className="avatar">
            {ticket.userId.charAt(0).toUpperCase()}
          </div>
          <span className="status-dot"></span>
          
        </div>
      </div>
      
      <div className="card-title">
        {ticket.title}
      </div>
      
      <div className="card-footer">
        <span className="priority-tag">
         <img src={priorityIcons[ticket.priority].image}/> 
       
        </span>
        <div className="feature-tags">
          {ticket.tag.map((tag, index) => (
            <span key={index} className="feature-tag">
              ⚪ {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}