import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { dummyTodoList } from "./data/dummyTodoList";
import { Todo } from "./types/todo";
import { AddTodoFrom } from "./components/AddTodoFrom";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(dummyTodoList);

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

  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-4xl text-center">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoFrom addTodo={addTodo} />
        <div className="p-5 rounded bg-slate-200">
          <TodoList
            todoList={todoList}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
