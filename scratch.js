{
  !subscription ? (
    <span className="monthly-price">&#36;19.99</span>
  ) : (
    <span className="annual-price">&#36;199.99</span>
  );
}

// I wanted this to be a componenent but it returned nothing in the UI
// Also would need the prices for each subscription plan to populate
const ChangePrice = () => {
  !subscription ? (
    <span className="monthly-price">&#36;19.99</span>
  ) : (
    <span className="annual-price">&#36;199.99</span>
  );
};
