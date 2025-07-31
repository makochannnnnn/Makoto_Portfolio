import React from 'react';

type UserProps = {
    name: string
    preface?: string; 
}

const Name = ({name,preface}: UserProps) => {
  return (
    <div className="mb-8">
      <p className='text-3xl font-semibold text-orange-400'>{preface}</p>
      <p className='text-5xl font-semibold text-orange-400'>{name}</p>
    </div>
  );
};

export default Name;