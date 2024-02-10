import Link from "next/link";

const UIs = () => {
  return (
    <div className="h-full">
      <h1 className="font-bold text-2xl pb-2">FEATURES LIST:</h1>
      <hr />
      <div className="flex flex-col space-y-1 pt-2">
        <Link href="/colors">Colors</Link>
        <Link href="/forms">Forms</Link>
      </div>
    </div>
  );
};
export default UIs;
