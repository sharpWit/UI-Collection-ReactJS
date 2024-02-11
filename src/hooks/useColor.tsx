import { useContext } from "react";

import { ColorContext } from "@/providers/ColorContextProvider";

export const useColor = () => {
  const context = useContext(ColorContext);

  if (context === undefined) {
    throw new Error('useColor must be used in the "ColorContextProvider"!');
  }
  return context;
};
