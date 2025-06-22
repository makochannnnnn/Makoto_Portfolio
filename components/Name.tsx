import React from 'react';

type UserProps = {
    name: string
}

const Name = ({name}: UserProps) => {
  return (
    <div className="mb-8">
      <p className='text-3xl font-semibold text-orange-400'>My name is... </p>
      <p className='text-5xl font-semibold text-orange-400'>{name}</p>
    </div>
  );
};

export default Name;