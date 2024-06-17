import { TodoList } from "./components/TodoList";
import { AddTodoFrom } from "./components/AddTodoFrom";
import { TodoSummary } from "./components/TodoSummary";
import { useTodoList } from "./hooks/useTodoList";

function App() {
  const { todoList, changeCompleted, addTodo, deleteTodo, deleteAllCompleted } =
    useTodoList();

  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-4xl text-center">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoFrom addTodo={addTodo} />
        <div className="p-5 space-y-5 rounded bg-slate-200">
          <TodoList
            todoList={todoList}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
          <TodoSummary deleteAllCompleted={deleteAllCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;
