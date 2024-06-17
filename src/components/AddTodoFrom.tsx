import { Plus } from "lucide-react";
import { useState } from "react";

type Props = {
  addTodo: (title: string) => void;
};

export const AddTodoFrom = ({ addTodo }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form className="flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="新しいTODOを入力してください"
        className="p-2 grow rounded-s bg-slate-200"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 transition-colors bg-blue-600 rounded-e hover:bg-blue-800 disabled:bg-blue-400"
      >
        <Plus className="text-white" />
      </button>
    </form>
  );
};
