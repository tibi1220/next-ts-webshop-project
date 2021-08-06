import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import InteractivePickIcon from '../components/item/InteractivePickIcon';
import InteractivePickPrice from '../components/item/InteractivePickPrice';
import useInput from '../hooks/useInput';

const AddListing: React.FC = () => {
  const router = useRouter();

  const [name, handleNameChange] = useInput('');
  const [seller, handleSellerChange] = useInput('');
  const [price, handlePriceChange] = useInput('');
  const [description, handleDescriptionChange] = useInput('');
  const [imageId, setImageId] = useState<number>(0);

  const [nameIsValid, setNameIsValid] = useState(false);
  useEffect(() => {
    setNameIsValid(name.length > 0);
  }, [name, setNameIsValid]);

  const [sellerIsValid, setSellerIsValid] = useState(false);
  useEffect(() => {
    setSellerIsValid(seller.length > 0);
  }, [seller, setSellerIsValid]);

  const [priceIsValid, setPriceIsValid] = useState(false);
  useEffect(() => {
    const num = parseInt(price);
    setPriceIsValid(num > 0 && num < 1000);
  }, [price, setPriceIsValid]);

  const [descriptionIsValid, setDescriptionIsValid] = useState(false);
  useEffect(() => {
    setDescriptionIsValid(description.length >= 10);
  }, [description, setDescriptionIsValid]);

  const [imageIsValid, setImageIsValid] = useState(false);
  useEffect(() => {
    setImageIsValid(!!imageId);
  }, [imageId, setImageIsValid]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !(
        nameIsValid &&
        priceIsValid &&
        sellerIsValid &&
        descriptionIsValid &&
        imageIsValid
      )
    ) {
      return;
    }

    try {
      await fetch('/api/v1/items/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          seller,
          price: parseInt(price),
          imageId,
          description,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      router.push('/');
    }
  };

  return (
    <div className="container mx-auto">
      <form
        action=""
        onSubmit={handleFormSubmit}
        className="flex flex-col bg-gray-100 m-4 md:my-8 rounded-xl py-8 md:py-12 shadow-inner space-y-6 sm:space-y-10"
      >
        <div className="mx-auto flex flex-col">
          <h1 className="text-3xl sm:text-4xl">Add New Listing</h1>
        </div>

        <div className="mx-auto flex flex-col space-y-2">
          <h2 className="text-2xl mx-auto">Enter Your Name</h2>
          <input
            className="mx-auto text-xl p-2 shadow-xl rounded-xl focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4 ring-green-50"
            value={seller}
            onChange={handleSellerChange}
          />
        </div>

        <div className="mx-auto flex flex-col space-y-2">
          <h2 className="text-2xl mx-auto">Enter the Item&#39;s name</h2>
          <input
            className="mx-auto text-xl p-2 shadow-xl rounded-xl focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4 ring-green-50"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="mx-auto flex flex-col space-y-2">
          <h2 className="text-2xl mx-auto">Tell Us More</h2>
          <textarea
            className="w-96 mx-auto text-xl p-2 shadow-xl rounded-xl focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4 ring-green-50"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="mx-auto flex flex-col space-y-2">
          <h2 className="text-2xl mx-auto">Enter Price</h2>
          <InteractivePickPrice
            value={price}
            handleValueChange={handlePriceChange}
          />
        </div>

        <div className="mx-auto flex flex-col space-y-2">
          <h2 className="text-2xl mx-auto">Select Image for Listing</h2>
          <InteractivePickIcon value={imageId} setValue={setImageId} />
        </div>

        <div className="mx-auto">
          <button
            type="submit"
            className="bg-gray-800 text-gray-100 rounded-xl text-2xl shadow-md p-2 mx-auto px-24 transition duration-300 ease-in-out hover:text-green-100 active:text-green-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
