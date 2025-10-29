import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("small");
  const [contactInfo, setContactInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePepperoniChange = (e) => {
    setPepperoniIsChecked(e.target.checked);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleContactChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <p>
        Your selection: {size} {pepperoniIsChecked ? "pepperoni" : "cheese"}
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={handlePepperoniChange}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>

        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select size: </label>
          <select id="select-size" value={size} onChange={handleSizeChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <h3>Contact Info</h3>
          <label htmlFor="email">Enter your email address: </label>
          <input
            type="text"
            id="email"
            placeholder="email address"
            value={contactInfo}
            onChange={handleContactChange}
          />
        </div>

        <button type="submit">Submit Order</button>
      </form>

      {submitted && <h2>Thanks for your order!</h2>}
    </div>
  );
}

export default App;
