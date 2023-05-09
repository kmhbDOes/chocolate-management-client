import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCardDetails from "./CoffeeCardDetails";

const CoffeeCard = () => {
  const chocolate = useLoaderData();

  const [newState, setNewState] = useState(chocolate);

  return (
    <div className="bg-info text-center grid grid-cols-1">
      <h2>Chocolate</h2>
      <h2>
        <Link to="/add-new">Add New Chocolate</Link>
      </h2>
      {chocolate.map((c) => (
        <CoffeeCardDetails
          key={c._id}
          c={c}
          newState={newState}
          setNewState={setNewState}
        ></CoffeeCardDetails>
      ))}
    </div>
  );
};

export default CoffeeCard;
