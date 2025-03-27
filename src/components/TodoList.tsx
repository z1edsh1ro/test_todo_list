
import React, { useMemo } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

const TodoList: React.FC = () => {
  const { todos } = useTodoContext();
  
  const activeTodos = useMemo(() => 
    todos.filter(todo => !todo.completed), [todos]
  );
  
  const completedTodos = useMemo(() => 
    todos.filter(todo => todo.completed), [todos]
  );
  
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
        <div className="text-4xl mb-2">📝</div>
        <h3 className="text-xl font-medium text-gray-800 mb-1">Your task list is empty</h3>
        <p className="text-gray-500">Add a new task to get started</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6 animate-slide-up">
      {activeTodos.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider pl-1">
            Tasks - {activeTodos.length}
          </h2>
          <div className="space-y-2">
            <AnimatePresence>
              {activeTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
      
      {completedTodos.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider pl-1">
            Completed - {completedTodos.length}
          </h2>
          <div className="space-y-2">
            <AnimatePresence>
              {completedTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
