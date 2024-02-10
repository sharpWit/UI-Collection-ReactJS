import Star from "./Star";

const createArray = (length: number) => [...Array(length)];

interface AdditionalProps {
  [key: string]: any;
}
interface Props extends AdditionalProps {
  totalStars?: number;
  selectedStars: number;
  onRateStar: (rating: number) => void;
}

const StarRating: React.FC<Props> = ({
  totalStars = 5,
  selectedStars = 0,
  onRateStar,
}) => {
  return (
    <div className="flex space-x-1" style={{ padding: "5px" }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRateStar(i + 1)}
        />
      ))}
      <p>{`${selectedStars} of ${totalStars} stars.`}</p>
    </div>
  );
};
export default StarRating;
