"use client";

import React from "react";
import { Todo } from "../types/todo";
import TodoList from "../../components/TodoList";
import TodoColumn from "../../components/TodoColumn";
import useTodo from "../todo/useTodo";

const TodoPage: React.FC = () => {
  const rawData: Todo[] = [
    { type: "Fruit", name: "Apple" },
    { type: "Vegetable", name: "Broccoli" },
    { type: "Vegetable", name: "Mushroom" },
    { type: "Fruit", name: "Banana" },
    { type: "Vegetable", name: "Tomato" },
    { type: "Fruit", name: "Orange" },
    { type: "Fruit", name: "Mango" },
    { type: "Fruit", name: "Pineapple" },
    { type: "Vegetable", name: "Cucumber" },
    { type: "Fruit", name: "Watermelon" },
    { type: "Vegetable", name: "Carrot" },
  ];
  const {
    todoList,
    fruits,
    vegetables,
    onClickTodoList,
    removeTodoAndClearTimeout,
  } = useTodo(rawData);

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex gap-4 margin-top-1 w-full lg:pl-[20%] lg:pr-[20%] xl:pl-[25%] xl:pr-[25%]">
        <TodoList todos={todoList} onTodoClick={onClickTodoList} />
        <TodoColumn
          title="Fruits"
          items={fruits}
          onItemRemove={removeTodoAndClearTimeout}
        />
        <TodoColumn
          title="Vegetable"
          items={vegetables}
          onItemRemove={removeTodoAndClearTimeout}
        />
      </div>
    </div>
  );
};

export default TodoPage;
