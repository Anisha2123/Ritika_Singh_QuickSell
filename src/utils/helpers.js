import todosvg from '../utils/Todo.svg';
import inprogresssvg from '../utils/inprogress.svg';
import donesvg from '../utils/done.svg';
import canceldsvg from '../utils/cancelled.svg';
import urgentsvg from '../utils/UrgentPrioritycolour.svg';
import highsvg from '../utils/ImgHighPriority.svg';
import medsvg from '../utils/ImgMediumPriority.svg'
import lowsvg from '../utils/ImgLowPriority.svg';
import noprioritysvg from '../utils/Nopriority.svg';


export const priorityMap = {
  4: { name: 'Urgent', image: urgentsvg },
  3: { name: 'High', image: highsvg },
  2: { name: 'Medium', image: medsvg  },
  1: { name: 'Low', image: lowsvg },
  0: { name: 'No priority', image: noprioritysvg }
};

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'todo':
      return todosvg;
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

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};



