import { useState } from "react";

function App() {
  const [subscription, setSubscription] = useState(true);
  // const [price, setPrice] = useState();
  const handleSubscriptionToggle = () => {
    setSubscription(!subscription);
  };

  return (
    <>
      <main>
        <div className="price-components-container">
          <h1 className="price-header">Our Pricing</h1>
          <div className="subscription-toggle">
            <label className="toggle" htmlFor="toggle">
              <span className="annually">Annually</span>
              <input
                className="toggle-input"
                id="toggle"
                name="toggle"
                type="checkbox"
                onClick={handleSubscriptionToggle}
              />
              <span className="toggle-display"></span>
              <span className="monthly">Monthly</span>
            </label>
          </div>

          <div className="price-cards-wrapper">
            <div className="price-card basic">
              <h2 className="plan-title">Basic</h2>
              <p className="price">
                {!subscription ? (
                  <span className="monthly-price">&#36;19.99&nbsp;&nbsp;</span>
                ) : (
                  <span className="annual-price">&#36;199.99</span>
                )}
              </p>
              <ul className="plan-list">
                <li className="plan-list-item">500 GB Storage</li>
                <li className="plan-list-item">2 Users Allowed</li>
                <li className="plan-list-item">Send up to 3 GB</li>
              </ul>
              <button className="learn-more-purple">Learn More</button>
            </div>
            <div className="price-card bg-purple-gradient professional">
              <h2 className="plan-title">Professional</h2>
              <p className="price">
                {!subscription ? (
                  <span className="monthly-price">&#36;24.99&nbsp;&nbsp;</span>
                ) : (
                  <span className="annual-price">&#36;249.99</span>
                )}
              </p>
              <ul className="plan-list">
                <li className="plan-list-item">1 TB Storage</li>
                <li className="plan-list-item">5 Users Allowed</li>
                <li className="plan-list-item">Send up to 10 GB</li>
              </ul>
              <button className="learn-more-white">Learn More</button>
            </div>
            <div className="price-card master">
              <h2 className="plan-title">Master</h2>
              <p className="price">
                {!subscription ? (
                  <span className="monthly-price">&#36;39.99&nbsp;&nbsp;</span>
                ) : (
                  <span className="annual-price">&#36;399.99</span>
                )}
              </p>
              <ul className="plan-list">
                <li className="plan-list-item">2 TB Storage</li>
                <li className="plan-list-item">10 Users Allowed</li>
                <li className="plan-list-item">Send up to 20 GB</li>
              </ul>
              <button className="learn-more-purple">Learn More</button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by
          <a
            href="https://www.frontendmentor.io/profile/amyspencerproject"
            target="_blank"
            rel="noreferrer"
          >
            Amy Spencer
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
