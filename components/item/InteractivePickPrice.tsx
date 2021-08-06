import React from 'react';
import NumberFormat from 'react-number-format';

interface Props {
  value: string;
  handleValueChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InteractivePickPrice: React.FC<Props> = ({
  value,
  handleValueChange,
}) => {
  return (
    <>
      <NumberFormat
        className="mx-auto text-xl p-2 shadow-xl rounded-xl focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4 ring-green-50"
        value={value.toString()}
        onChange={handleValueChange}
        prefix={''}
        decimalScale={2}
        fixedDecimalScale={true}
      />
    </>
  );
};

export default InteractivePickPrice;
