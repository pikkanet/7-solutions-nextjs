import React from "react";
import { Todo } from "../app/types/todo";

interface Props {
  todo: Todo;
  onClick: () => void;
}

const TodoButton: React.FC<Props> = ({ todo, onClick }) => {
  return (
    <button
      className="h-10 text-sm lg:h-14 lg:text-base border hover:bg-[var(--hover-color)]"
      onClick={onClick}
    >
      {todo.name}
    </button>
  );
};

export default TodoButton;
