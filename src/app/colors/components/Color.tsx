import { Trash } from "lucide-react";

import StarRating from "@/components/rating/StarRating";

interface Props {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
}
const Color: React.FC<Props> = ({
  id,
  title,
  color,
  rating,
  onRemove,
  onRate,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <Trash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRateStar={(rating: number) => onRate(id, rating)}
      />
    </section>
  );
};
export default Color;
