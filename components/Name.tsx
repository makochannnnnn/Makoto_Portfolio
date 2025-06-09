import React from 'react';

type UserProps = {
    name: string
}

const Name = ({name}: UserProps) => {
  return (
    <div className='p-4 bg-blue-100 rounded-lg shadow-md'>
      <p className='text-lg font-semibold text-blue-800'>My name is {name}</p>
    </div>
  );
};

export default Name;