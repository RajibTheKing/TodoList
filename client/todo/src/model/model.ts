export type Task = {
  id: string;
  title: string;
  status: string; // later we can improve this by enum
  // priority: string, or we don't need this now
};

export type TodoState = {
  loading: boolean;
  items: Task[];
};
export const initialState: TodoState = {
  loading: false,
  items: [
    {
      id: '1',
      title: 'Task 1',
      status: 'PENDING'
    },
    {
      id: '2',
      title: 'Task 2',
      status: 'DONE'
    },
    {
      id: '3',
      title: 'Task 3',
      status: 'PENDING'
    }
  ]
}

export interface RootState {
  version: string;
}
