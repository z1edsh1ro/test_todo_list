
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
