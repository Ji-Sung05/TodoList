// TodoList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import NewList from './NewList';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from '../store/thunkFunction';
import styled from 'styled-components';

const ListContainer = styled.div`
  height: 761px;
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todos.lists);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddList = (title, date) => {
    dispatch(addTodo({ title, date }));
  };

  const handleDeleteList = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateList = (id, title, date) => {
    dispatch(updateTodo({ id, title, date }));
  };

  return (
    <div className='flex flex-col h-600px'>
      <NewList
        onAdd={handleAddList} />
      <ListContainer>
        {lists.map((list) => (
        <List
          key={list.id}
          id={list.id}
          title={list.title}
          date={list.date}
          onDelete={handleDeleteList}
          onUpdate={handleUpdateList}
        />
      ))}
      </ListContainer>
    </div>
  );
};

export default TodoList;
