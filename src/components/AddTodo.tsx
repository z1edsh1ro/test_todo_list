
import React, { useState, useRef, useEffect } from "react";
import { useTodoContext } from "../context/TodoContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const AddTodo: React.FC = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
      
      // Re-focus the input after submission
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex w-full gap-2 animate-slide-up"
    >
      <Input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="w-full px-4 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0"
      />
      <Button 
        type="submit" 
        className="flex items-center justify-center h-12 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default AddTodo;
