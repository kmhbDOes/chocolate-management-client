import React from "react";

const CoffeeCard = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffee = form.coffee.value;
    const quantity = form.quantity.value;

    const inputs = { coffee, quantity };

    console.log(inputs);
  };
  return (
    <div className="bg-info text-center">
      <h2>Coffee Card:</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="coffee" />
        <br />
        <input type="text" name="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CoffeeCard;
