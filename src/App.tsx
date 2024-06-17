import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { dummyTodoList } from "./data/dummyTodoList";
import { Todo } from "./types/todo";

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

  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-4xl text-center">Todoアプリ</h1>
      <div className="p-5 rounded bg-slate-200">
        <TodoList todoList={todoList} changeCompleted={changeCompleted} />
      </div>
    </main>
  );
}

export default App;
