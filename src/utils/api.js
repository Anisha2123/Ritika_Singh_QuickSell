export const fetchKanbanData = async () => {
  const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
  if (!response.ok) {
    throw new Error('Failed to fetch kanban data');
  }
  return response.json();
};
