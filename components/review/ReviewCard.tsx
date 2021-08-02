import React from 'react';
import StarRating from '../stars/StarRating';

interface Props {
  review: Review;
}

const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <div className="m-4 bg-white rounded-xl shadow-xl p-2 md:p-4 inline-flex flex-col space-y-2 divide-y-2 divide-gray-800">
      <div className="inline-flex w-full justify-between m-2 mb-0 pr-1">
        <div>
          <span className="text-xl">{review.name}</span>
        </div>
        <div className="pr-1">
          <StarRating stars={review.stars} />
        </div>
      </div>
      <div className="m-1 p-1 pt-3 text-justify">
        <span>{review.review}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
