import React, { useState } from 'react';

export type ValueType = string;
export type HandlerFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
export type SetterFunction = React.Dispatch<React.SetStateAction<string>>;

/**
 * @param initialValue - will be used as the initial state
 * @returns a stateful value, an event change handler function,
 * a state updater function, stored in an array.
 */
const useInput = (
  initialValue: ValueType
): [string, HandlerFunction, SetterFunction] => {
  const [value, setValue] = useState<string>(initialValue);

  return [
    value,
    e => {
      setValue(e.target.value);
    },
    setValue,
  ];
};

export default useInput;
