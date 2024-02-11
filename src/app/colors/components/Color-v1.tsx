"use client";

import { Trash } from "lucide-react";

import StarRating from "@/components/rating/StarRating";
import { useColor } from "@/hooks/useColor";

interface Props {
  id: string;
  title: string;
  color: string;
  rating: number;
}
const Color: React.FC<Props> = ({ id, title, color, rating }) => {
  const { onRateColor, onRemoveColor } = useColor();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemoveColor(id)}>
        <Trash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRateStar={(rating: number) => onRateColor(id, rating)}
      />
    </section>
  );
};
export default Color;
