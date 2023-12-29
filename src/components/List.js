import React from 'react'
import styled from 'styled-components';
import Button from './UI/Button';
import useEditForm from '../hooks/useEditForm';

const ListContainer = styled.div`
  border: 1px solid #000;
  border-radius: 6px;
  width: 480px;
  min-height: 180px;
  display: flex;
  gap: 15px;
  padding: 20px;
  margin-bottom: 10px;
  &:last-child{
    margin-bottom: 0;
  }
`;

const List = ({id, title, date, onDelete, onUpdate}) => {
  const { isEditing, editedTitle, editedDate, setEditedTitle, setEditedDate, handleUpdate} = useEditForm({id, title, date, onUpdate});

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <ListContainer>
      {isEditing ? (
        <div className='flex flex-col gap-5 justify-center w-4/5'>
          <input
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className='mr-2'
          />
          <input
            type='date'
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
            className='mr-2'
          />
        </div>
      ) : (
        <div className='flex flex-col gap-5 justify-center w-4/5'>
          <p className='text-3xl font-bold'>{title}</p>
          <p className='text-2xl'>{date}</p>
        </div>
      )}
      <div className='flex flex-col gap-5 justify-center'>
        <Button text="삭제" width={60} color="#FC53FF" size={15} onClick={handleDelete} />
        <Button text={isEditing ? '확인' : '수정'} width={60} color={isEditing ? '#00E7F6' : '#FF8D8D'} size={15} onClick={handleUpdate} />
      </div>
    </ListContainer>
  )
}

export default List