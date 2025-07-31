import React from "react";

type UserProps = {
    image: string;
    altText?: string;
    
}

const Image = ({image,altText} : UserProps) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img className="w-auto h-1/2" src={image} alt={altText}/>
    </div>
  );
};

export default Image;