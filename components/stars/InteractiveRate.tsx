import React, { useMemo } from 'react';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid';

interface Props {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const InteractiveRate: React.FC<Props> = ({ state, setState }) => {
  const Stars = useMemo(() => {
    const generateStars = (stars: number): JSX.Element[] => {
      let retArr: JSX.Element[] = [];

      for (let i = 1; i <= 5; i++) {
        retArr.push(
          <div className="inline cursor-pointer" onClick={() => setState(i)}>
            {i <= stars + 0.3 ? (
              <SolidStarIcon
                key={i}
                className="w-6 h-6 transform scale-110 text-yellow-400 inline"
              />
            ) : (
              <OutlineStarIcon
                key={i}
                className="w-6 h-6 text-yellow-400 inline"
              />
            )}
          </div>
        );
      }
      return retArr;
    };

    return generateStars(state);
  }, [state, setState]);

  return <div>{Stars}</div>;
};

export default InteractiveRate;
