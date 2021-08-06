import React, { useState } from 'react';

export type ValueType<T> = T;
export type HandlerFunction<Q extends HTMLInputElement | HTMLTextAreaElement> =
  (e: React.ChangeEvent<Q>) => void;
export type SetterFunction = React.Dispatch<
  React.SetStateAction<string | number>
>;

/**
 * @param initialValue - will be used as the initial state
 * @returns a stateful value, an event change handler function,
 * a state updater function, stored in an array.
 */
const useInput = <
  T extends string | number = string,
  Q extends HTMLInputElement | HTMLTextAreaElement =
    | HTMLInputElement
    | HTMLTextAreaElement
>(
  initialValue: ValueType<T>
): [T, HandlerFunction<Q>, SetterFunction] => {
  const [value, setValue] = useState<T>(initialValue);

  return [
    value,
    e => {
      setValue(
        typeof initialValue === 'string'
          ? e.target.value
          : parseInt(e.target.value)
      );
    },
    setValue,
  ];
};

export default useInput;
