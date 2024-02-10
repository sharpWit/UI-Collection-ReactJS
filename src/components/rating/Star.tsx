import { Star as StarIcon } from "lucide-react";

interface Props {
  selected: boolean;
  onSelect: () => void;
}

const Star: React.FC<Props> = ({ selected = false, onSelect }) => {
  return (
    <div>
      <StarIcon fill={selected ? "red" : "grey"} onClick={onSelect} />
    </div>
  );
};

export default Star;
