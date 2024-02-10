import Color from "./Color";

type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}[];

interface Props {
  colors: Color | [];
  onRemoveColor: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
}
const ColorList: React.FC<Props> = ({
  colors = [],
  onRemoveColor,
  onRateColor,
}) => {
  if (!colors.length) return <div>No colors listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};
export default ColorList;
