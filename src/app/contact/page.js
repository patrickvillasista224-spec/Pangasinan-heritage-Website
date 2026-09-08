import HeaderNavigation from "../../components/organisms/HeaderNavigation";
import Footer from "../../components/organisms/Footer";

export default function ContactPage() {
  return (
    <>
      <HeaderNavigation />

      <main className="contact-page">

        {/* ========================================
            CONTACT HERO
        ======================================== */}

        <section className="contact-hero">

          <div className="contact-hero-content">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h1>
              Contact Us
            </h1>

            <p>
              Have a question, suggestion, or feedback
              about our Pangasinan heritage guide?
              We would love to hear from you.
            </p>

          </div>

        </section>


        {/* ========================================
            CONTACT CONTENT
        ======================================== */}

        <section className="contact-content">

          {/* LEFT SIDE */}

          <div className="contact-information">

            <span className="contact-label">
              LET&apos;S CONNECT
            </span>

            <h2>
              We&apos;d Love to Hear From You
            </h2>

            <p>
              Whether you have questions about a
              heritage destination, want to suggest
              a place to feature, or simply want to
              share your experience, feel free to
              reach out to us.
            </p>


            {/* EMAIL */}

            <div className="contact-item">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <h3>
                  Email
                </h3>

                <p>
                  pangasinanheritage@example.com
                </p>
              </div>

            </div>


            {/* LOCATION */}

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>
                  Location
                </h3>

                <p>
                  Pangasinan, Philippines
                </p>
              </div>

            </div>


            {/* WEBSITE */}

            <div className="contact-item">

              <div className="contact-icon">
                🌐
              </div>

              <div>
                <h3>
                  Heritage Guide
                </h3>

                <p>
                  Discover the beauty and heritage
                  of Pangasinan.
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE - FORM */}

          <div className="contact-form-container">

            <h2>
              Send Us a Message
            </h2>

            <p>
              Fill out the form below and let us
              know how we can help.
            </p>


            <form className="contact-form">

              {/* NAME */}

              <div className="contact-form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="contact-form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>


              {/* SUBJECT */}

              <div className="contact-form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="contact-form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message here..."
                  required
                />

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Message
                <span>→</span>
              </button>

            </form>

          </div>

        </section>


        {/* ========================================
            CONTACT CTA
        ======================================== */}

        <section className="contact-cta">

          <h2>
            Ready to Explore Pangasinan?
          </h2>

          <p>
            Discover the natural, historical,
            religious, and cultural heritage
            of Pangasinan.
          </p>

          <a
            href="/Pangasinan-heritage-Website/"
            className="contact-cta-button"
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