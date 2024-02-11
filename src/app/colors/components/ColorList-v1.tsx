"use client";

import { useColor } from "@/hooks/useColor";
import Color from "./Color-v1";

const ColorList = () => {
  const { colors } = useColor();

  if (!colors.length) return <div>No colors listed.</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};
export default ColorList;
