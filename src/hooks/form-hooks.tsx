import React from "react";

type Change<T> = (fieldType: keyof T, value: string) => void;

type Response<T> = [T, Change<T>];

function useFormHook<T>(initialState: T): Response<T> {
  // Loign state form
  const [form, setForm] = React.useState<T>(initialState);

  // Handler
  const onChange = (fieldType: keyof T, value: string) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldType]: value,
    }));
  };

  return [form, onChange];
}

export default useFormHook;
