"use client";

import { FormEvent } from "react";

import { useInput } from "@/hooks/useInput";
import { useColor } from "@/hooks/useColor";

const AddColorForm = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, colorTitle] = useInput("#000000");
  const { onAddColor } = useColor();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddColor(titleProps.value, colorProps.value);
    resetTitle();
    colorTitle();
  };

  return (
    <form
      onSubmit={submit}
      className="flex flex-col space-y-1 max-w-md w-full bg-gray-300 p-2"
    >
      <label htmlFor="ColorTitle">Color Title</label>
      <input
        type="text"
        id="ColorTitle"
        {...titleProps}
        required
        placeholder="Color title..."
      />
      <label htmlFor="ColorPicker">Color</label>
      <input id="ColorPicker" {...colorProps} type="color" required />
      <button type="submit" className="bg-stone-500 text-white p-1">
        Add Color
      </button>
    </form>
  );
};
export default AddColorForm;
