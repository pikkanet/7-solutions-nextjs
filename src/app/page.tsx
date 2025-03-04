"use client";

import React, { useRef, useState } from "react";

interface Todo {
  type: string;
  name: string;
}

enum TodoType {
  FRUIT = "Fruit",
  VEGETABLE = "Vegetable",
}

const TodoPage: React.FC = () => {
  const rawData: Todo[] = [
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ];
  const [todoList, setTodoList] = useState(rawData);
  const [fruits, setFruits] = useState<Todo[]>([]);
  const [vegetables, setVegetables] = useState<Todo[]>([]);
  const timeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const onClickTodoList = (todo: Todo) => {
    if (todo.type === TodoType.FRUIT) {
      setFruits((prev) => [...prev, todo]);
      timeouts.current[todo.name] = setTimeout(() => {
        setFruits((prevItems) =>
          prevItems.filter((item) => item.name !== todo.name)
        );

        setTodoList((prev) => [...prev, todo]);
      }, 5000);
    } else if (todo.type === TodoType.VEGETABLE) {
      setVegetables((prev) => [...prev, todo]);
      timeouts.current[todo.name] = setTimeout(() => {
        setVegetables((prevItems) =>
          prevItems.filter((item) => item.name !== todo.name)
        );
        if (!vegetables.includes(todo)) {
          setTodoList((prev) => [...prev, todo]);
        }
      }, 5000);
    }
    setTodoList((prev) => prev.filter((item) => todo.name !== item.name));
  };

  const removeTodoAndClearTimeout = (todo: Todo) => {
    if (timeouts.current[todo.name]) {
      clearTimeout(timeouts.current[todo.name]);
      delete timeouts.current[todo.name];
    }
    if (todo.type === TodoType.FRUIT) {
      setFruits((prev) => prev.filter((fruit) => fruit.name !== todo.name));
    } else {
      setVegetables((prev) =>
        prev.filter((vegetable) => vegetable.name !== todo.name)
      );
    }
    setTodoList((prev) => [...prev, todo]);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex gap-4 margin-top-1 w-1/2">
        <div className="flex flex-col w-1/3 gap-2">
          {todoList.map((todo, index) => (
            <button
              className="h-14 border hover:bg-[var(--hover-color)]"
              key={index}
              onClick={() => onClickTodoList(todo)}
            >
              {todo.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col h-[700px] items-center w-1/3 border">
          <div className="h-11 w-full flex justify-center items-center bg-[var(--gray-200)]">
            <p className="text-lg font-bold">Fruits</p>
          </div>
          <div className="w-full flex flex-col p-3 gap-2">
            {fruits.map((item, index) => (
              <button
                className="h-14 border  hover:bg-[var(--hover-color)]"
                key={index}
                onClick={() => removeTodoAndClearTimeout(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col h-[700px] items-center w-1/3 border">
          <div className="h-11 w-full flex justify-center items-center bg-[var(--gray-200)]">
            <p className="text-lg font-bold">Vegetable</p>
          </div>
          <div className="w-full flex flex-col p-3 gap-2">
            {vegetables.map((item, index) => (
              <button
                className="h-14 border  hover:bg-[var(--hover-color)]"
                key={index}
                onClick={() => removeTodoAndClearTimeout(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
