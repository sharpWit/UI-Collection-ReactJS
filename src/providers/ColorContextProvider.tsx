"use client";

import { PropsWithChildren, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import colorData from "@/constants/color-data.json";
import { Color, TColorContext } from "@/types/color";

// A New Context Object
export const ColorContext = createContext<TColorContext>({} as TColorContext);

export const ColorContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [colors, setColors] = useState(colorData);

  const onAddColor = (title: string, color: string) => {
    // Validate color format
    const isValidColor = /^#[0-9A-Fa-f]{6}$/i.test(color);

    let newColors: Color = [];

    if (isValidColor) {
      newColors = [...colors, { id: uuidv4(), title, color, rating: 0 }];
      setColors(newColors);
    } else {
      console.error("Invalid color format");
      throw new Error("Invalid color format");
    }
  };
  const onRemoveColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };
  const onRateColor = (id: string, rating: number) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );

    setColors(newColors);
  };

  const colorContextVelue: TColorContext = {
    colors,
    onAddColor,
    onRemoveColor,
    onRateColor,
  };
  return (
    <ColorContext.Provider value={colorContextVelue}>
      {children}
    </ColorContext.Provider>
  );
};
