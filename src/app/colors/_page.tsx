"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import colorData from "@/constants/color-data.json";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import { ColorContextProvider } from "@/providers/ColorContextProvider";

type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}[];

function ColorPage() {
  const [colors, setColors] = useState<Color | []>(colorData);

  // New unique id
  const unique_id = uuidv4();

  return (
    <ColorContextProvider>
      <div>
        <div className="p-2">
          <AddColorForm
            onNewColor={(title: string, color: string) => {
              // Validate color format
              const isValidColor = /^#[0-9A-Fa-f]{6}$/i.test(color);

              let newColors: Color = [];

              if (isValidColor) {
                newColors = [
                  ...colors,
                  { id: unique_id, title, color, rating: 0 },
                ];
                setColors(newColors);
              } else {
                console.error("Invalid color format");
                throw new Error("Invalid color format");
              }
            }}
          />
        </div>
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
    </ColorContextProvider>
  );
}
export default ColorPage;
