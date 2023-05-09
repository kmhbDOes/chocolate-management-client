import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCardDetails from "./CoffeeCardDetails";

const CoffeeCard = () => {
  const chocolate = useLoaderData();

  return (
    <div className="bg-info text-center">
      <h2>Chocolate</h2>
      {chocolate.map((c) => (
        <CoffeeCardDetails key={c._id} c={c}></CoffeeCardDetails>
      ))}
    </div>
  );
};

export default CoffeeCard;
