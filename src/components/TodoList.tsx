import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

type Props = {
  todoList: Todo[];
  changeCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoList = ({ todoList, changeCompleted, deleteTodo }: Props) => {
  return (
    <div className="space-y-3">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-3 p-2 bg-white rounded"
        >
          <label
            htmlFor=""
            className="flex items-center gap-3 grow hover:cursor-pointer"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-5"
                checked={todo.completed}
                onChange={() => changeCompleted(todo.id)}
              />
            </div>
            <span
              className={todo.completed ? "text-gray-400 line-through" : ""}
            >
              {todo.title}
            </span>
          </label>
          <button
            type="button"
            className="p-2 transition-colors bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => deleteTodo(todo.id)}
          >
            <Trash2 className="text-gray-500 size-5" />
          </button>
        </div>
      ))}
    </div>
  );
};
