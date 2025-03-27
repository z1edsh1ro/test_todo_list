
import React from "react";
import { TodoProvider } from "../context/TodoContext";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Index: React.FC = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8 md:py-12 flex flex-col items-center">
        
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-2">
              To Do List
            </h1>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 shadow-xl">
            <div className="mb-6">
              <AddTodo />
            </div>
            
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Index;
