import React, { useContext } from 'react';
import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import useInput from '../../hooks/useInput';
import SearchContext from '../../contexts/SearchContext';

const Navbar: React.FC = () => {
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) return;
    router.push(`/search/${searchQuery}`);
  };

  return (
    <div className="bg-gray-800">
      <nav
        className="font-mono grid grid-cols-4 md:grid-cols-8 h-32 md:h-16 p-4 place-content-around text-green-100 container mx-auto items-center"
        role="navigation"
      >
        <div className="col-span-1 text-3xl px-2 my-auto ">
          <Link href="/">
            <a className="hover:text-green-300 transition duration-200 ease-in-out active:text-red-300">
              NXT
            </a>
          </Link>
        </div>
        <form
          onSubmit={handleSearchSubmit}
          action=""
          className="col-span-4 justify-self-auto place-self-center inline-flex md:justify-center justify-around row-start-2 md:row-start-1 col-start-1 md:col-start-2 my-auto sm:space-x-4"
        >
          <input
            // value={searchQuery}
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="flex-grow p-2 rounded-lg ring-2 ring-green-100 text-gray-800 focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4"
            placeholder="Search for items..."
          />
          <button
            type="submit"
            className="ml-2 w-auto rounded-lg sm:ring-2 ring-green-100 p-2 bg-green-100 active:bg-green-300 transition duration-500 ease-in-out sm:hover:ring-4"
          >
            <SearchIcon className="w-6 h-6 text-gray-800" />
          </button>
        </form>
        <div className="col-span-3 justify-self-end text-lg place-self-center my-auto">
          <Link href="/add-listing">
            <a className="md:mx-3 mx-2 hover:text-green-300 transition duration-200 ease-in-out active:text-red-300">
              Upload
            </a>
          </Link>
          <Link href="/profile">
            <a className="md:mx-3 mx-2 hover:text-green-300 transition duration-200 ease-in-out active:text-red-300">
              Profile
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
