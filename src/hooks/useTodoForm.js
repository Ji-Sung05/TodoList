import { useState } from 'react';

const useTodoForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setDate('');
  };

  return {
    title,
    date, 
    setTitle,
    setDate,
    resetForm,
  };
};

export default useTodoForm;