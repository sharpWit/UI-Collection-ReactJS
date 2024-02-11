import ColorList from "./components/ColorList-v1";
import AddColorForm from "./components/AddColorForm-v1";
import { ColorContextProvider } from "@/providers/ColorContextProvider";

const ColorPage = () => {
  return (
    <ColorContextProvider>
      <div>
        <div className="p-2">
          <AddColorForm />
        </div>
        <ColorList />
      </div>
    </ColorContextProvider>
  );
};
export default ColorPage;
