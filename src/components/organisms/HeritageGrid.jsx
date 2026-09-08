"use client";

import { useState } from "react";
import HeritageCard from "../molecules/HeritageCard";
import SearchForm from "../molecules/SearchForm";

const heritageSites = [
  {
    name: "Hundred Islands",
    location: "Alaminos, Pangasinan",
    description:
      "A beautiful island destination known for its scenic limestone islands and clear waters.",
    category: [
      "Natural Heritage",
      "Beaches & Islands",
      "Eco-Tourism",
    ],
    images: [
      "/images/hundred-islands.jpg",
      "/images/hundred-islands1.jpg",
      "/images/hundred-islands2.jpg",
    ],
  },

  {
    name: "Patar Beach",
    location: "Brgy. Patar, Bolinao, Pangasinan",
    description:
      "A popular coastal destination known for its long stretch of creamy-white and golden sand, clear turquoise waters, and stunning sunset views facing the West Philippine Sea.",
    category: [
      "Natural Heritage",
      "Beaches & Islands",
    ],
    images: [
      "/images/bolinao-lighthouse.jpg",
      "/images/bolinao-lighthouse1.jpg",
      "/images/bolinao-lighthouse2.jpg",
    ],
  },

  {
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    description:
      "A relaxing destination known for its natural hot spring and surrounding landscape.",
    category: [
      "Natural Heritage",
      "Eco-Tourism",
    ],
    images: [
      "/images/balungao-hot-spring.jpg",
      "/images/balungao-hot-spring1.jpg",
      "/images/balungao-hot-spring2.jpg",
    ],
  },

  {
    name: "Minor Basilica of Our Lady of the Rosary of Manaoag",
    location: "Manaoag, Pangasinan",
    description:
      "A famous Roman Catholic minor basilica and pilgrimage center located on a hill in Manaoag, Pangasinan, Philippines.",
    category: [
      "Religious Heritage",
      "Historical Heritage",
    ],
    images: [
      "/images/Manaoag1.jpg",
      "/images/Manaoag2.jpg",
      "/images/Manaoag3.jpg",
    ],
  },

  {
    name: "Bolinao Falls",
    location: "Bolinao, Pangasinan",
    description:
      "Bolinao Falls has various levels as it is an interconnected waterfalls system, separating each level to Bolinao Falls 1, Bolinao Falls 2 and Bolinao Falls 3.",
    category: [
      "Natural Heritage",
      "Eco-Tourism",
    ],
    images: [
      "/images/BolinaoFalls1.jpg",
      "/images/BolinaoFalls2.jpg",
      "/images/BolinaoFalls3.jpg",
    ],
  },

  {
    name: "Enchanted Cave",
    location: "Bolinao, Pangasinan",
    description:
      "One of the popular natural tourist attractions located along Patar Road in Bolinao, Pangasinan.",
    category: [
      "Natural Heritage",
      "Eco-Tourism",
    ],
    images: [
      "/images/Enchanted1.jpg",
      "/images/Enchanted2.jpg",
      "/images/Enchanted3.jpg",
    ],
  },
];

const categories = [
  "All",
  "Natural Heritage",
  "Historical Heritage",
  "Religious Heritage",
  "Cultural Heritage",
  "Beaches & Islands",
  "Eco-Tourism",
];

export default function HeritageGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredSites = heritageSites.filter((site) => {
    const matchesCategory =
      selectedCategory === "All" ||
      site.category.includes(selectedCategory);

    const search = searchTerm
      .toLowerCase()
      .trim();

    const matchesSearch =
      search === "" ||
      site.name.toLowerCase().includes(search) ||
      site.location.toLowerCase().includes(search) ||
      site.description.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="heritage-section">

      {/* SEARCH */}
      <div className="section-heading">

        <SearchForm
          onSearch={setSearchTerm}
        />

        <h2>
          Explore by Category
        </h2>

        <p>
          Find heritage experiences that match
          your interest.
        </p>

      </div>

      {/* CATEGORY FILTERS */}
      <div className="category-filter">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              selectedCategory === category
                ? "category-button active"
                : "category-button"
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>
        ))}

      </div>

      {/* RESULTS HEADING */}
      <div className="filter-result-heading">

        <h3>
          {selectedCategory === "All"
            ? "Featured Heritage Sites"
            : selectedCategory}
        </h3>

        <p>
          Showing {filteredSites.length} heritage{" "}
          {filteredSites.length === 1
            ? "site"
            : "sites"}
          .
        </p>

      </div>

      {/* HERITAGE CARDS */}
      <div className="heritage-grid">

        {filteredSites.map((site) => (
          <HeritageCard
            key={site.name}
            name={site.name}
            location={site.location}
            description={site.description}
            images={site.images}
          />
        ))}

      </div>

      {/* NO RESULTS */}
      {filteredSites.length === 0 && (
        <div className="no-results">

          <h3>
            No heritage sites found
          </h3>

          <p>
            There are currently no heritage
            sites matching your search or
            selected category.
          </p>

        </div>
      )}

      {/* ================================
          ABOUT PANGASINAN
      ================================= */}

      <section className="about-preview">

        <div className="about-preview-content">

          <span className="about-label">
            DISCOVER PANGASINAN
          </span>

          <h2>
            About Pangasinan
          </h2>

          <p>
            Pangasinan is a province rich in history,
            culture, and natural beauty. Located in
            the northwestern part of Luzon, the
            province is known for its beautiful
            beaches, islands, waterfalls, churches,
            heritage sites, and vibrant local
            traditions.
          </p>

          <p>
            From the famous Hundred Islands and
            Bolinao coastline to the historic
            Manaoag Church, Pangasinan offers
            visitors a diverse collection of
            experiences that showcase the beauty
            and heritage of the province.
          </p>

          <a
            href="/about"
            className="about-learn-button"
          >
            Learn More
            <span>→</span>
          </a>

        </div>

        <div className="about-preview-image">

          <img
            src="/images/hundred-islands.jpg"
            alt="Hundred Islands in Pangasinan"
          />

        </div>

      </section>

    </section>
  );
}