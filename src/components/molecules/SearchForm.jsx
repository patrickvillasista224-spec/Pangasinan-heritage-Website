"use client";

import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSearch(search);
  }

  function handleClear() {
    setSearch("");
    onSearch("");
  }

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <div className="search-form-row">

        <input
          id="heritage-search"
          type="search"
          placeholder="Search Pangasinan heritage..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <button
          type="submit"
          className="button"
        >
          Search
        </button>

        {search && (
          <button
            type="button"
            className="search-clear-button"
            onClick={handleClear}
          >
            Clear
          </button>
        )}

      </div>
    </form>
  );
}