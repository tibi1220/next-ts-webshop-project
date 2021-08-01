import React, { useMemo, memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ItemIcon from './ItemIcon';
import StarDetailed from '../stars/StarDetailed';

interface Props {
  item: Item;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  return (
    <>
      <div className="mx-auto p-4 bg-gray-100 w-full rounded-xl shadow-inner inline-flex flex-col md:flex-row justify-between md:divide-x-2 divide-y-2 md:divide-y-0 divide-gray-800">
        <div className="h-44 my-4 md:my-auto m-auto flex flex-col">
          <ItemIcon imageId={item.imageId} />
          <StarDetailed reviews={item.reviews} />
        </div>
        <div className="h-full md:w-4/6 inline-flex flex-col justify-between md:my-auto md:h-full">
          <div className="w-full mx-auto px-2 md:pl-4 py-4 md:py-0 inline-flex justify-between">
            <div>
              <Link href={`/item/${item.id}`}>
                <a className="text-xl font-bold">{item.name}</a>
              </Link>
            </div>
            <div>
              <span className="text-xl font-bold">${item.price}</span>
            </div>
          </div>
          <div className="w-full p-2 md:pl-4 text-justify">
            {item.description}
          </div>
          <div className="inline-flex justify-between">
            <div className="pt-2 md:pt-0 pl-2 md:pl-4 my-auto">
              <p>By {item.seller}</p>
            </div>
            <div className="pt-2 md:pt-0 pr-2">
              <button
                className=" bg-gray-800 text-gray-100 p-2 rounded-lg"
                onClick={() => {
                  router.push(`/item/${item.id}`);
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ItemCard);
