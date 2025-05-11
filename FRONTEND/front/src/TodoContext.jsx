import { createContext, useContext, useState } from "react";
import axios from "axios";

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [ALLTODOS, setALLTODOS] = useState([]);
  const [TODO, setTODO] = useState("");
  const [loading, setLoading] = useState(true);

  async function allTODOS() {
    try {
    //   setLoading(true);
      const todos = await axios.get("http://localhost:8000/api/TODO/list");
      setALLTODOS(todos.data.data);
      setLoading(false);
    } catch (error) {
      console.log("having error", error);
      setLoading(false);
    }
  }

  const value = {
    ALLTODOS,
    setALLTODOS,
    TODO,
    setTODO,
    loading,
    setLoading,
    allTODOS,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
