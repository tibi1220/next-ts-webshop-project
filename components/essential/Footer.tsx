import React from 'react';
import Link from 'next/link';

const FooterSection: React.FC = () => {
  return (
    <div className="bg-gray-800 text-green-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around text-center">
          <div className="p-4 m-auto">
            <h3 className="text-xl border-b-2 border-gray-500 uppercase pt-4">
              Developer
            </h3>
            <ul className="text-gray-500">
              <li className="py-0.5">
                <a
                  href="https://github.com/tibi1220/next-webshop-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github (Code)
                </a>
              </li>
              <li className="py-0.5">
                <Link href="/about">
                  <a>Contact</a>
                </Link>
              </li>
              <li className="py-0.5">
                <Link href="/about">
                  <a>Resources</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-4 m-auto">
            <h3 className="text-xl border-b-2 border-gray-500 uppercase pt-4">
              NXT
            </h3>
            <ul className="text-gray-500">
              <li className="py-0.5">
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="py-0.5">
                <Link href="/user-agreement">
                  <a>User Agreement</a>
                </Link>
              </li>
              <li className="py-0.5">
                <Link href="/">
                  <a>Homepage</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xl font-bold font-mono text-center p-4">
            Copyright © @tibi1220. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
