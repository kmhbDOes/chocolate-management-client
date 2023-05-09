import React from "react";
import Swal from "sweetalert2";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddNew = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;

    const inputs = { name, quantity };

    console.log(inputs);

    //Send data to server
    fetch("http://localhost:5000/chocolate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-info text-center">
      <h2>Chocolate Card:</h2>
      <Link to="/">Back to All Chocolates</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddNew;
