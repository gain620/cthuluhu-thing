import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

  // border-radius: 0 0 46px 46px;
  // background: grey;
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(todo => {
        return <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      })}
      {/* <TodoItem text="Netflix 보기" done={true} /> */}
    </TodoListBlock>
  );
};

export default TodoList;
