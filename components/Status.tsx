import React from "react";

type UserProps = {
    status: string;
}

const Status =({status} : UserProps)=> {
  return (
    
    <div className="text-3xl font-bold text-yellow-500 mb-8">
      <p>I belong to...</p>
      <p className="text-4xl">{status}</p>
    </div>
    
  );
}

export default Status;