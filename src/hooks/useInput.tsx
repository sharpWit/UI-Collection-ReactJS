import { ChangeEvent, useState } from "react";

export type TuseInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type TReset = () => void;

type TuseInputReturn = [TuseInputProps, TReset];

export const useInput = (initialValue: string): TuseInputReturn => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const InputProps: TuseInputProps = {
    value,
    onChange: handleChange,
  };

  const handleReset: TReset = () => setValue(initialValue);

  return [InputProps, handleReset];
};
