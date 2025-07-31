import React from 'react';
import Achivement from '../../components/Achievment';


export default function Achievment() {
  //関数とか変数とか書く場所
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-green-300">
      <h1 className="text-4xl font-bold mb-8">Achievment</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <Achivement name="hand" image="./my_face.jpg" collaborator_name='Mr.Kamijo'/>
        <Achivement name="hand" image="./my_face.jpg" collaborator_name='Mr.Kamijo'/>
        <Achivement name="hand" image="./my_face.jpg" collaborator_name='Mr.Kamijo'/>
        <Achivement name="hand" image="./my_face.jpg" collaborator_name='Mr.Kamijo'/>
        <Achivement name="hand" image="./my_face.jpg" collaborator_name='Mr.Kamijo'/>
        <Achivement name="hand" image="./my_face.jpg" collaborator_name='Mr.Kamijo'/>
      </div>
      

    </main>
  );
}
