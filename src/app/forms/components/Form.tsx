"use client";

import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const txtColor = useRef<HTMLInputElement | null>(null);
  const [color, setColor] = useState("#000000");

  const addNewColor = (title: string, color: string) => {
    // Validate color format
    const isValidColor = /^#[0-9A-Fa-f]{6}$/i.test(color);

    if (isValidColor) {
      console.log(`Title is ${title} and Color is ${color}`);
    } else {
      console.error("Invalid color format");
      // Handle the error or provide user feedback
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = txtColor.current?.value;
    if (title) {
      addNewColor(title, color);
      txtColor.current!.value = ""; // Safe to use non-null assertion here
    }
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtColor} type="text" required placeholder="Color title..." />
      <input onChange={(e) => setColor(e.target.value)} type="color" required />
      <button>Add</button>
    </form>
  );
};
export default Form;
