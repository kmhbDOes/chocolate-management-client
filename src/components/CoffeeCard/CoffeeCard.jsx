import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCardDetails from "./CoffeeCardDetails";

const CoffeeCard = () => {
  const chocolate = useLoaderData();

  return (
    <div className="bg-info text-center grid grid-cols-1">
      <h2>Chocolate</h2>
      <h2>
        <Link to="/add-new">Add New Coffee</Link>
      </h2>
      {chocolate.map((c) => (
        <CoffeeCardDetails key={c._id} c={c}></CoffeeCardDetails>
      ))}
    </div>
  );
};

export default CoffeeCard;
