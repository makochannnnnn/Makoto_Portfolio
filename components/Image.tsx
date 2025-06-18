import React from "react";

type UserProps = {
    image: string;
    altText?: string;
}

const Image = ({image,altText} : UserProps) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={image}
        alt={altText}
      />
    </div>
  );
};