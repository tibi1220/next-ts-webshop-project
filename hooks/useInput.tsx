import React, { useState } from 'react';

const useInput = (
  initialValue: string
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(initialValue);

  return [
    value,
    e => {
      setValue(e.target.value);
    },
  ];
};

export default useInput;
