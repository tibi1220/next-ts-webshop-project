import Head from 'next/head';
import Navbar from '../components/essential/Navbar';
import React from 'react';
import SearchContext from '../contexts/SearchContext';
import useInput from '../hooks/useInput';
import Footer from '../components/essential/Footer';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const [searchQuery, handleSearchQueryChange, setSearchQuery] = useInput('');

  return (
    <SearchContext.Provider
      value={{ searchQuery, handleSearchQueryChange, setSearchQuery }}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>NXT Webshop</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </SearchContext.Provider>
  );
};

export default DefaultLayout;
