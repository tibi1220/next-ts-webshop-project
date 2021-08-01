import React, { useMemo } from 'react';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid';

interface Props {
  stars: number;
}

const getStars = (stars: number): JSX.Element[] => {
  let retArr: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    retArr.push(
      i <= stars + 0.3 ? (
        <SolidStarIcon
          key={i}
          className="w-6 h-6 transform scale-110 text-yellow-400 inline"
        />
      ) : (
        <OutlineStarIcon key={i} className="w-6 h-6 text-yellow-400 inline" />
      )
    );
  }
  return retArr;
};

const StarRating: React.FC<Props> = ({ stars }) => {
  const Stars = useMemo(() => getStars(stars), [stars]);

  return <div className="mx-auto">{Stars}</div>;
};

export default StarRating;
