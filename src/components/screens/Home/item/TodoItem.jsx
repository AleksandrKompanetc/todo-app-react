import React from 'react';
import Check from './Check';

const TodoItem = ({ todo }) => {
  return (
    <div className='flex items-center mb-4 rounded-xl bg-gray-700'>
      <Check />
      {todo.title}
    </div>
  )
}

export default TodoItem;