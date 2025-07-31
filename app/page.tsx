import Image from "../components/Image";
// import React, { useState } from 'react';
import Name from '../components/Name';
import Status from '../components/Status';
import Position from '../components/Position';
import Link from 'next/link';

export default function Home() {
  //関数とか変数とか書く場所
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-green-300">
        <h1 className="text-4xl font-bold mb-8 text-orange-500">Welcome!!</h1>
      <Image
        image="/my_face.jpg"
        altText="Next.js Logo"
      />
      <div>
        <Name name="Yamamoto Makoto" preface="My Name is..."/>
        <Status status="Nagaoka Univercity of Technology"/>
        <Position position="Honorary Graduate of Ishikawa National Institute of Technology"/>
      </div>

      {/* <p className="mt-8 text-gray-600">This is my first Next.js page with App Router and Tailwind CSS.</p> */}
      {/* <Link href="/achievment" className="text-blue-500 hover:underline mt-4">実績</Link> */}
      {/* <Link href="/technology" className="text-blue-500 hover:underline mt-4">技術</Link> */}
      {/* <Link href="/contact" className="text-blue-500 hover:underline mt-4">お問い合わせ</Link> */}
      {/* <Link href="/interests" className="text-blue-500 hover:underline mt-4">興味</Link> */}
      {/* <Link href="/hobby" className="text-blue-500 hover:underline mt-4">趣味</Link> */}
      {/* <button className="bg-white text-black p-2 rounded">Click me</button> */}
    </main>
  );
}
