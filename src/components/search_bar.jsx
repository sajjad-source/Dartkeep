import React, { useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar({ handleSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <header>
      <nav className="border-b-2 border-dark-blue bg-slate-900 px-4 py-3">
        <form className="mx-auto max-w-md" onSubmit={handleSubmit} noValidate>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              type="search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-white dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
              placeholder="Search"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg px-4 py-2 text-sm font-medium text-white"
            >
              Search
            </button>
          </div>
        </form>
      </nav>
    </header>
  );
}

export default SearchBar;
