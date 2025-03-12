import { useCallback, useEffect, useRef, useState } from "react";
import { Todo, TodoType } from "../types/todo";

const useTodo = (initialTodos: Todo[]) => {
  const [todoList, setTodoList] = useState(initialTodos);
  const [fruits, setFruits] = useState<Todo[]>([]);
  const [vegetables, setVegetables] = useState<Todo[]>([]);
  const timeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    const currentTimeouts = timeouts.current;
    return () => {
      Object.values(currentTimeouts).forEach(clearTimeout);
    };
  }, []);

  const onClickTodoList = useCallback((todo: Todo) => {
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
        setTodoList((prev) => [...prev, todo]);
      }, 5000);
    }
    setTodoList((prev) => prev.filter((item) => todo.name !== item.name));
  }, [])


  const removeTodoAndClearTimeout = useCallback((todo: Todo) => {
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
  }, []);

  return { todoList, fruits, vegetables, onClickTodoList, removeTodoAndClearTimeout };
};

export default useTodo;
