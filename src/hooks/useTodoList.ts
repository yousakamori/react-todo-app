import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    const localStorageTodoList = localStorage.getItem("todoList");

    return JSON.parse(localStorageTodoList ?? "[]");
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const changeCompleted = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      const newTodo: Todo = {
        id: Date.now(),
        title,
        completed: false,
      };

      return [newTodo, ...prevTodoList];
    });
  };

  const deleteTodo = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== id);
    });
  };

  const deleteAllCompleted = () => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => !todo.completed);
    });
  };

  return { todoList, changeCompleted, addTodo, deleteTodo, deleteAllCompleted };
};
