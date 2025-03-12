import React from "react";
import { Todo } from "../app/types/todo";
import TodoButton from "./TodoButton";

interface Props {
  title: string;
  items: Todo[];
  onItemRemove: (todo: Todo) => void;
}

const TodoColumn: React.FC<Props> = ({ title, items, onItemRemove }) => {
  return (
    <div className="flex flex-col h-[520px] lg:h-[696px] items-center w-1/3 border">
      <div className="h-11 w-full flex justify-center items-center bg-[var(--gray-200)]">
        <p className="text-base lg:text-lg font-bold">{title}</p>
      </div>
      <div className="w-full flex flex-col p-3 gap-2">
        {items.map((item) => (
          <TodoButton
            key={item.name}
            todo={item}
            onClick={() => onItemRemove(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoColumn;
