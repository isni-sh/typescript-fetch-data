"use client";

import Card from "./Card";

type PostProps = {
  id: number;
  title: string;
  completed: boolean;
}[];

async function getPosts(): Promise<PostProps> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Home() {
  const data = await getPosts();
  return (
    <main className="grid grid-cols-4">
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            id={item.id}
            title={item.title}
            defaultValue={"default"}
          />
        );
      })}
    </main>
  );
}
