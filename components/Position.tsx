import React from "react";

type UserProps = {
    position: string;
}

const Position = ({ position }: UserProps) => {
  return (
    <div className="text-3xl font-bold text-blue-500 mb-8">
      <p>I am the...</p>
      <p className="text-4xl">{position}</p>
    </div>
  );
};

export default Position;