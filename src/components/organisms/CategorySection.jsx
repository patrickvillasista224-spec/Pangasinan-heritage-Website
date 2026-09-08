const categories = [
  {
    name: "Natural Heritage",
    icon: "☀",
  },
  {
    name: "Historical Heritage",
    icon: "📖",
  },
  {
    name: "Religious Heritage",
    icon: "☆",
  },
  {
    name: "Cultural Heritage",
    icon: "👥",
  },
  {
    name: "Beaches & Islands",
    icon: "📍",
  },
  {
    name: "Eco-Tourism",
    icon: "◇",
  },
];

export default function CategorySection({
  selectedCategory,
  onCategorySelect,
}) {
  return (
    <section className="category-section">
      <div className="category-container">

        {/* Heading */}

        <div className="category-heading">
          <h2>Explore by Category</h2>

          <p>
            Find heritage experiences that match your interest.
          </p>
        </div>

        {/* Categories */}

        <div className="category-grid">

          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={`category-card ${
                selectedCategory === category.name
                  ? "category-card-active"
                  : ""
              }`}
              onClick={() =>
                onCategorySelect(category.name)
              }
            >

              <span className="category-icon">
                {category.icon}
              </span>

              <span className="category-name">
                {category.name}
              </span>

              <span className="category-arrow">
                →
              </span>

            </button>
          ))}

        </div>

        {/* Selected Category */}

        {selectedCategory !== "All" && (
          <div className="category-selected">
            Showing:
            <strong> {selectedCategory}</strong>

            <button
              type="button"
              className="category-clear"
              onClick={() => onCategorySelect("All")}
            >
              Show All
            </button>
          </div>
        )}

      </div>
    </section>
  );
}