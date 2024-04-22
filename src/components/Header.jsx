/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TODO: Search Bar Functionality

function Header() {
  return (
    <header>
      <nav className="border-dark-blue border-b-2 px-4 py-3 bg-slate-900">
        <form className="max-w-md mx-auto">
          <div className="relative">
            <div className="text-white absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input type="search" className="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>
      </nav>
    </header>
  );
}

export default Header;
