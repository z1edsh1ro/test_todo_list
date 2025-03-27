
import React, { useState } from "react";
import { Todo } from "../types";
import { useTodoContext } from "../context/TodoContext";
import { Trash2, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext();
  const [isHovered, setIsHovered] = useState(false);
  
  // Format the date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(todo.createdAt);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm transition-all duration-300",
        todo.completed ? "bg-gray-50/80" : "",
        "hover:shadow-md hover:-translate-y-0.5"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={cn(
          "flex items-center justify-center w-5 h-5 rounded-full border transition-all duration-300 flex-shrink-0",
          todo.completed 
            ? "bg-primary border-primary" 
            : "border-gray-300 hover:border-primary/70"
        )}
      >
        {todo.completed && (
          <Check className="h-3 w-3 text-white" />
        )}
      </button>
      
      <div className="flex-1 min-w-0">
        <p className={cn(
          "text-base text-gray-900 truncate transition-all duration-300",
          todo.completed && "text-gray-400 line-through"
        )}>
          {todo.text}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">
          {formattedDate}
        </p>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => deleteTodo(todo.id)}
        className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-destructive rounded-full transition-colors duration-200"
        aria-label="Delete todo"
      >
        <Trash2 className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};

export default TodoItem;
