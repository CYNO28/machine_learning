import React, { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  function onClickHandler() {
    setTodo([
      ...todo,
      {
        id: id,
        title: input,
        bookmark: false,
      },
    ]);
    setId(id + 1);
  }
  function onDelHandler(id) {
    setTodo(todo.filter((el) => el.id != id));
  }
  function onBookHandler(id) {
    let arr = todo.reduce((newTodo, ele) => {
      if (ele.id == id) {
        ele.bookmark = true;
        return (newTodo = [...newTodo, ele]);
      }
      return (newTodo = [...newTodo, ele]);
    }, []);
    setTodo(arr);
  }
  function onEditHandler(id, input) {
    let arr = todo.reduce((newTodo, ele) => {
      if (ele.id == id) {
        ele.title = input;
        return (newTodo = [...newTodo, ele]);
      }
      return (newTodo = [...newTodo, ele]);
    }, []);
    setTodo(arr);
  }
  let bookmarked = todo.filter((e) => e.bookmark);
  let not_bookmarked = todo.filter((e) => !e.bookmark);
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={onClickHandler}>Add Todo</button>
      {not_bookmarked.map((e, i) => (
        <Todo
          key={i}
          title={e.title}
          id={e.id}
          onDelHandler={onDelHandler}
          onBookHandler={onBookHandler}
          onEditHandler={onEditHandler}
        ></Todo>
      ))}
      <h1>Bookmark</h1>
      {bookmarked.map((e, i) => (
        <Todo
          key={i}
          title={e.title}
          id={e.id}
          onDelHandler={onDelHandler}
          onBookHandler={onBookHandler}
          onEditHandler={onEditHandler}
        ></Todo>
      ))}
    </div>
  );
};

export default Todos;
