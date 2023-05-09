import React from "react";
import Swal from "sweetalert2";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddNew = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const inputs = { name, country, category, photo };

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
        <input
          className="rounded-pill"
          type="text"
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          className="my-2"
          type="text"
          name="country"
          placeholder="Country"
        />
        <br />
        <input
          className="my-2"
          type="text"
          name="category"
          placeholder="Category"
        />
        <br />
        <input
          className="my-2"
          type="text"
          name="photo"
          placeholder="Photo URL"
        />
        <br />
        <input className="my-2" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddNew;
