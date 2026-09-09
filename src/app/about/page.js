import HeaderNavigation from "../../components/organisms/HeaderNavigation";
import Footer from "../../components/organisms/Footer";

export default function AboutPage() {
  return (
    <>
      <HeaderNavigation />

      <main className="about-page">

        {/* HERO */}

        <section className="about-hero">

          <div className="about-hero-content">

            <span className="about-label">
              DISCOVER PANGASINAN
            </span>

            <h1>
              About Pangasinan
            </h1>

            <p>
              Discover the history, culture, natural
              beauty, and heritage that make Pangasinan
              a remarkable destination in the Philippines.
            </p>

          </div>

        </section>


        {/* INTRODUCTION */}

        <section className="about-content">

          <div className="about-text">

            <span className="about-label">
              OUR PROVINCE
            </span>

            <h2>
              A Province Rich in Heritage
            </h2>

            <p>
              Pangasinan is a province located in the
              northwestern part of Luzon. It is known
              for its beautiful landscapes, historical
              places, religious landmarks, beaches,
              islands, waterfalls, and cultural
              traditions.
            </p>

            <p>
              The province offers a unique combination
              of natural and cultural attractions.
              Visitors can explore the famous Hundred
              Islands, relax along the beaches of
              Bolinao, discover waterfalls and caves,
              or experience the religious heritage of
              Manaoag.
            </p>

            <p>
              Through this website, we aim to help
              visitors discover and appreciate the
              different heritage destinations found
              throughout Pangasinan.
            </p>

          </div>

          <div className="about-image">

            <img
              src="/Pangasinan-heritage-Website/images/hundred-islands1.jpg"
              alt="Beautiful landscape of Hundred Islands"
            />

          </div>

        </section>


        {/* WHAT YOU CAN DISCOVER */}

        <section className="about-discover">

          <div className="about-discover-heading">

            <span className="about-label">
              EXPLORE
            </span>

            <h2>
              What You Can Discover
            </h2>

            <p>
              Pangasinan offers different types of
              heritage experiences for every visitor.
            </p>

          </div>


          <div className="about-feature-grid">

            <article className="about-feature-card">

              <div className="about-feature-icon">
                🌿
              </div>

              <h3>
                Natural Heritage
              </h3>

              <p>
                Discover waterfalls, caves,
                hot springs, mountains, and
                other natural attractions.
              </p>

            </article>


            <article className="about-feature-card">

              <div className="about-feature-icon">
                🏛️
              </div>

              <h3>
                Historical Heritage
              </h3>

              <p>
                Explore historical places and
                landmarks that reflect the
                province&apos;s past.
              </p>

            </article>


            <article className="about-feature-card">

              <div className="about-feature-icon">
                ⛪
              </div>

              <h3>
                Religious Heritage
              </h3>

              <p>
                Visit important churches and
                religious landmarks that are
                meaningful to local communities.
              </p>

            </article>


            <article className="about-feature-card">

              <div className="about-feature-icon">
                🌊
              </div>

              <h3>
                Beaches &amp; Islands
              </h3>

              <p>
                Experience beautiful beaches,
                islands, clear waters, and
                breathtaking coastal views.
              </p>

            </article>

          </div>

        </section>


        {/* CALL TO ACTION */}

        <section className="about-cta">

          <div>

            <h2>
              Start Exploring Pangasinan
            </h2>

            <p>
              Discover beautiful places and
              meaningful heritage experiences
              across the province.
            </p>

          </div>

          <a
            href="/Pangasinan-heritage-Website/"
            className="about-cta-button"
          >
            Explore Heritage Sites
            <span>→</span>
          </a>

        </section>

      </main>

      <Footer />
    </>
  );
}