import React from "react";
import { Todo } from "../app/types/todo";
import TodoButton from "./TodoButton";

interface Props {
  todos: Todo[];
  onTodoClick: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todos, onTodoClick }) => {
  return (
    <div className="flex flex-col w-1/3 gap-2">
      {todos.map((todo) => (
        <TodoButton
          key={todo.name}
          todo={todo}
          onClick={() => onTodoClick(todo)}
        />
      ))}
    </div>
  );
};

export default TodoList;
