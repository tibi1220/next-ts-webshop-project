import React, { useState, useEffect } from 'react';
import useInput from '../../../hooks/useInput';
import { useRouter } from 'next/router';
import InteractiveRate from '../../../components/stars/InteractiveRate';

type T = (e: React.ChangeEventHandler<HTMLTextAreaElement>) => void;

const AddReview: React.FC = () => {
  const [name, handleNameChange] = useInput('');
  const [starsCount, setStarsCount] = useState(0);
  const [description, handleDescriptionChange] = useInput('');

  const [nameIsValid, setNameIsValid] = useState(false);
  const [descriptionIsValid, setDescriptionIsValid] = useState(false);
  const [starsIsValid, setStarsIsValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setNameIsValid(name.length > 0);
  }, [name]);
  useEffect(() => {
    setDescriptionIsValid(description.length > 10);
  }, [description]);
  useEffect(() => {
    setStarsIsValid(starsCount > 0 && starsCount < 6);
  }, [starsCount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(nameIsValid && starsIsValid && descriptionIsValid)) {
      return;
    }

    const id = router.query.itemId;

    try {
      await fetch(`/api/v1/reviews/add/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          review: description,
          stars: starsCount,
        }),
      });
      router.push(`/item/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full bg-green-50 rounded-xl m-5 md:m-10 shadow-inner "
        >
          <div className="w-full lg:w-2/3 m-auto flex flex-col space-y-6">
            <h2 className="text-center mt-10 text-3xl">Enter Your Name</h2>
            <div className="flex flex-col justify-center text-xl">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="name"
                className="p-2 flex-grow text-center mx-5 sm:mx-10 md:mx-20 rounded-lg shadow-lg focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4 ring-blue-50"
              />
              {!nameIsValid && (
                <div className="h-0">
                  <p className="text-sm text-right mx-5 sm:mx-10 md:mx-20 p-2 text-red-500">
                    Must enter name
                  </p>
                </div>
              )}
            </div>

            <h2 className="text-center text-3xl pt-10">Rate with stars</h2>
            <div className="flex flex-col justify-center">
              <div className="mx-auto">
                <InteractiveRate state={starsCount} setState={setStarsCount} />
              </div>
              {!starsIsValid && (
                <div className="h-0">
                  <p className="text-sm text-right mx-5 sm:mx-10 md:mx-20 p-2 text-red-500">
                    Must select stars
                  </p>
                </div>
              )}
            </div>

            <h2 className="text-center text-3xl pt-10">Tell us more</h2>
            <div className="flex flex-col">
              <div className="flex flex-center">
                <textarea
                  name="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Write your detailed review here"
                  className="p-2 flex-grow mx-5 sm:mx-10 md:mx-20 rounded-lg shadow-lg focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4 ring-blue-50"
                />
              </div>
              {!descriptionIsValid && (
                <div className="h-0">
                  <p className="text-sm text-right mx-5 sm:mx-10 md:mx-20 p-2 text-red-500">
                    Must be at least 10 characters
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-center">
              <button
                type="submit"
                className="bg-gray-800 text-green-100 rounded-xl text-2xl shadow-md p-2 mx-auto my-10"
              >
                Submit Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
