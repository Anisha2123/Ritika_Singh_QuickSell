import { useContext, useMemo } from 'react';
import { KanbanContext } from '../context/KanbanContext';
import urgentsvg from '../utils/UrgentPrioritycolour.svg';
import highsvg from '../utils/ImgHighPriority.svg';
import medsvg from '../utils/ImgMediumPriority.svg'
import lowsvg from '../utils/ImgLowPriority.svg';
import noprioritysvg from '../utils/Nopriority.svg';

const priorityMap = {
  4: { name: 'Urgent', image: urgentsvg },
  3: { name: 'High', image: highsvg },
  2: { name: 'Medium', image: medsvg  },
  1: { name: 'Low', image: lowsvg },
  0: { name: 'No priority', image: noprioritysvg }
};

export function useKanban() {
  const { state, dispatch } = useContext(KanbanContext);
  const { tickets, users, grouping, sorting } = state;

  const sortedTickets = useMemo(() => {
    if (!tickets.length) return [];

    let sorted = [...tickets];
    
    if (sorting === 'priority') {
      sorted.sort((a, b) => b.priority - a.priority);
    } else if (sorting === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    return sorted;
  }, [tickets, sorting]);

  const groupedTickets = useMemo(() => {
    if (!sortedTickets.length) return [];

    if (grouping === 'status') {
      const groups = {};
      sortedTickets.forEach(ticket => {
        if (!groups[ticket.status]) {
          groups[ticket.status] = [];
        }
        groups[ticket.status].push(ticket);
      });
      return Object.entries(groups).map(([status, tickets]) => ({
        title: status,
        tickets
      }));
    }

    if (grouping === 'user') {
      const groups = {};
      sortedTickets.forEach(ticket => {
        const user = users.find(u => u.id === ticket.userId);
        const userName = user ? user.name : 'Unassigned';
        if (!groups[userName]) {
          groups[userName] = [];
        }
        groups[userName].push(ticket);
      });
      return Object.entries(groups).map(([userName, tickets]) => ({
        title: userName,
        tickets
      }));
    }

    if (grouping === 'priority') {
      const groups = {};
      sortedTickets.forEach(ticket => {
        const priority = priorityMap[ticket.priority].name;
        if (!groups[priority]) {
          groups[priority] = [];
        }
        groups[priority].push(ticket);
      });
      return Object.entries(groups).map(([priority, tickets]) => ({
        title: priority,
        icon: priorityMap[tickets[0].priority].icon,
        tickets
      }));
    }

    return [];
  }, [sortedTickets, grouping, users]);

  return {
    groupedTickets,
    loading: state.loading,
    error: state.error,
    grouping,
    sorting,
    setGrouping: (value) => dispatch({ type: 'SET_GROUPING', payload: value }),
    setSorting: (value) => dispatch({ type: 'SET_SORTING', payload: value })
  };
}