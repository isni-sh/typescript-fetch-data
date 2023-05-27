"use client";

import { useState } from "react";

type CardProps = {
  id: number;
  title: string;
  defaultValue: any;
};

export default function Card({ id, title, defaultValue }: CardProps) {
  const [newTitle, setNewTitle] = useState(defaultValue);

  return (
    <div className="border border-red-500 p-3">
      <p className="text-2xl font-bold">{id}</p>
      <p className="text-sm py-4">{title}</p>
      {newTitle && (
        <p className="bg-green-50 text-green-500 my-4 p-1 rounded-lg">
          {newTitle}
        </p>
      )}
      <button
        onClick={() => setNewTitle("Another value!!")}
        className="bg-red-50 text-sm font-medium text-red-500 px-4 py-1 rounded-lg"
      >
        Change value
      </button>
    </div>
  );
}
