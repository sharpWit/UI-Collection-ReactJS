export type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}[];

export type TColorContext = {
  colors: Color;
  onAddColor: (title: string, color: string) => void;
  onRemoveColor: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
};
