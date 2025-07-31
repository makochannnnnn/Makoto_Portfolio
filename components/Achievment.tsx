import React from "react";
import Name from './Name';
import Image from './Image';
import Link from "next/link";

type AchievmentProps = {
    name: string| "";
    image: string;
    collaborator_name: string | "";
}

const Achievment = ({name,image,collaborator_name}:AchievmentProps) => {
    return (
    
        <div className="mt-1 border-5 border-green-500 bg-green-300 flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Name name={name}/>
            <Image image={image} altText="Achievement Image"/>
            <p>this is the purpose</p>
            <Name name={collaborator_name} preface="THanks to" />
            <a href="https://www.nutfes.net/" className="text-blue-500 hover:underline mt-4">
                Achievment
            </a>
        </div>
    );
}

export default Achievment;