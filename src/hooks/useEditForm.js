import { useState } from 'react';

const useEditForm = ({ id, title, date, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDate, setEditedDate] = useState(date);

  const handleUpdate = () => {
    if (isEditing) {
      onUpdate(id, editedTitle, editedDate);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return {
    isEditing,
    editedTitle,
    editedDate,
    setEditedTitle,
    setEditedDate,
    handleUpdate
  };
};

export default useEditForm;