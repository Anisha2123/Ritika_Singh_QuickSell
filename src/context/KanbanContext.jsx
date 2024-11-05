import React, { createContext, useReducer, useEffect } from 'react';

export const KanbanContext = createContext();

const initialState = {
  tickets: [],
  users: [],
  grouping: localStorage.getItem('grouping') || 'status',
  sorting: localStorage.getItem('sorting') || 'priority',
  loading: true,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        tickets: action.payload.tickets,
        users: action.payload.users,
        loading: false
      };
    case 'SET_GROUPING':
      localStorage.setItem('grouping', action.payload);
      return {
        ...state,
        grouping: action.payload
      };
    case 'SET_SORTING':
      localStorage.setItem('sorting', action.payload);
      return {
        ...state,
        sorting: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export function KanbanProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DATA', payload: data }))
      .catch(error => dispatch({ type: 'SET_ERROR', payload: error.message }));
  }, []);

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
}