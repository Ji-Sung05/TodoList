import React from 'react'
import styled from 'styled-components';
import Button from './UI/Button';
import useTodoForm from '../hooks/useTodoForm';

const ListContainer = styled.div`
  border: 1px solid #000;
  border-radius: 6px;
  width: 480px;
  height: 180px;
  display: flex;
  gap: 15px;
  padding: 20px;
  margin-bottom: 10px;
`;

const NewList = ({ onAdd }) => {
  const { title, date, setTitle, setDate, resetForm } = useTodoForm();

  const handleAdd = () => {
    onAdd(title, date);
    resetForm();
  };

  return (
    <ListContainer>
      <div className='flex flex-col gap-5 justify-center w-4/5'>
        <input
        type='text'
        placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='mr-2'
      />
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className='mr-2'
      />
      </div>
      <div className='flex justify-center items-center'>
        <Button text="추가" width={60} color="#00E7F6" size={15} onClick={handleAdd} />
      </div>
    </ListContainer>
  )
}

export default NewList