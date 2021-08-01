import Head from 'next/head';
import Navbar from '../components/essential/Navbar';
import React, { useState } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
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
    </>
  );
};

export default DefaultLayout;
