import Image from "next/image";
// import React, { useState } from 'react';
import Name from '../components/Name';
import Link from 'next/link';

export default function Home() {
  //関数とか変数とか書く場所
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <Image
        src="/my_face.jpg"
        alt="Next.js Logo"
        width={200}
        height={200}
        className="rounded-full mb-8"/>
      <Name name="Makoto"/>
      <p className="mt-8 text-gray-600">This is my first Next.js page with App Router and Tailwind CSS.</p>
      <Link href="/achievment" className="text-blue-500 hover:underline mt-4">実績</Link>
      <button className="bg-white text-black p-2 rounded">Click me</button>
    </main>
  );
}
