import ItemIcon from '../../../components/item/ItemIcon';
import prisma from '../../../lib/prisma';
import Link from 'next/link';
import StarDetailed from '../../../components/stars/StarDetailed';
import ReviewCard from '../../../components/review/ReviewCard';

import React from 'react';
import { GetServerSideProps } from 'next';

interface Props {
  input: string;
  result: Item;
}

const ItemPage: React.FC<Props> = ({ input, result }) => {
  return (
    <div className="container mx-auto py-4 md:py-10">
      <div className="bg-gray-100 shadow-inner p-4 md:px-6 rounded-xl m-2 mx-4 flex-row divide-y-2 md:divide-y-0 divide-gray-800">
        <div className="flex flex-col md:flex-row md:divide-x-2 divide-y-2 md:divide-y-0 divide-gray-800">
          <div className="my-4 m-auto flex flex-col">
            <ItemIcon imageId={result.imageId} />
            <StarDetailed reviews={result.reviews} />
          </div>
          <div className="w-full md:w-2/3 inline-flex flex-col p-2 md:px-6 space-y-8 md:space-y-6 my-auto">
            <div className="inline-flex justify-between">
              <div className="text-3xl md:text-4xl mt-auto">{result.name}</div>
              <div className="text-xl md:text-2xl my-auto">${result.price}</div>
            </div>
            <div className="text-justify">{result.description}</div>
            <div className="text-right">
              <span>By {result.seller}</span>
            </div>
          </div>
        </div>
        <div>
          {result.reviews.length !== 0 ? (
            <>
              <div className="p-2 md:pl-10 md:my-10 text-3xl md:text-5xl md:text-center flex justify-between md:justify-center md:space-x-4">
                <div>Reviews</div>
                <div>
                  <Link href={`/item/${input}/add-review`}>
                    <a className="text-gray-500 text-base">( Add Review)</a>
                  </Link>
                </div>
              </div>
              <div className="inline-grid grid-cols-1 sm:grid-cols-2 mx-auto w-full">
                {result.reviews.map(e => (
                  <ReviewCard review={e} key={`r${e.id}`} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center p-4 text-xl md:text-3xl text-gray-500">
              <Link href={`./${input}/add-review`}>
                <a>Click here to write a review</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const input = parseInt(context.query.itemId as string);
  const result = await prisma.item.findUnique({
    where: {
      id: input,
    },
    include: {
      reviews: true,
    },
  });

  return {
    props: {
      input,
      result,
    },
  };
};
