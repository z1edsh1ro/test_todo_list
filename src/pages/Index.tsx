
import React from "react";
import { TodoProvider } from "../context/TodoContext";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { Toaster } from "sonner";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8 md:py-12 flex flex-col items-center">
        <Toaster position="top-center" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl font-medium text-gray-900 mb-2"
            >
              Elegant Tasks
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600"
            >
              Simply beautiful task management
            </motion.p>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8 shadow-xl">
            <div className="mb-6">
              <AddTodo />
            </div>
            
            <TodoList />
          </div>
        </motion.div>
        
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-sm text-gray-500 text-center"
        >
          <p>Designed with simplicity in mind.</p>
        </motion.footer>
      </div>
    </TodoProvider>
  );
};

export default Index;
