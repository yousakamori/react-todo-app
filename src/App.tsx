import { TodoList } from "./components/TodoList";
import { dummyTodoList } from "./data/dummyTodoList";

function App() {
  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-4xl text-center">Todoアプリ</h1>
      <div className="p-5 rounded bg-slate-200">
        <TodoList todoList={dummyTodoList} />
      </div>
    </main>
  );
}

export default App;
