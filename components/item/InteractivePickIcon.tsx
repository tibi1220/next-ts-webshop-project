import React, { useMemo } from 'react';
import ItemIcon from './ItemIcon';

interface Props {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const InteractivePickIcon: React.FC<Props> = ({ value, setValue }) => {
  const Images = useMemo(() => {
    const generateImages = (value: number): JSX.Element[] => {
      let retArr: JSX.Element[] = [];

      for (let i = 1; i < 7; i++) {
        retArr.push(
          <div
            className={`cursor-pointer rounded-xl p-1 m-1 w-16 animate ease-in-out duration-300 hover:bg-green-100 active:bg-green-300 ${
              i !== value ? 'bg-gray-100' : 'bg-green-100'
            }`}
            onClick={() => {
              setValue(i);
            }}
            key={`icon${i}`}
          >
            <ItemIcon imageId={i} />
          </div>
        );
      }

      return retArr;
    };

    return generateImages(value);
  }, [value, setValue]);

  return <div className="flex justify-center flex-wrap">{Images}</div>;
};

export default InteractivePickIcon;
