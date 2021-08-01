import React, { useMemo } from 'react';
import StarRating from './StarRating';

interface Props {
  reviews: Review[];
}

const StarDetailed: React.FC<Props> = ({ reviews }) => {
  const avg = useMemo(
    () => reviews.reduce((a, i) => a + i.stars, 0) / reviews.length,
    [reviews]
  );

  return (
    <div className="flex flex-col mx-auto">
      <div className="mx-auto">
        {avg
          ? `${avg.toFixed(2)}, ${reviews.length} ${
              reviews.length === 1 ? 'rating' : 'ratings'
            }`
          : 'No reviews yet'}
      </div>
      <StarRating stars={avg} />
    </div>
  );
};

export default StarDetailed;
