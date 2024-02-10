"use client";

import { useState } from "react";

import ColorList from "./components/ColorList";
import colorData from "@/constants/color-data.json";

type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}[];

function ColorPage() {
  const [colors, setColors] = useState<Color | []>(colorData);

  return (
    <div>
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );

          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
    </div>
  );
}
export default ColorPage;
