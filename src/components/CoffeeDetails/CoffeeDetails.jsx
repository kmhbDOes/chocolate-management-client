import React from "react";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const c = useLoaderData();
  const { _id, name, category, country } = c;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const inputs = { _id, name, country, category, photo };

    console.log(inputs);

    //Send data to server
    fetch(`http://localhost:5000/chocolate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Chocolate Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-info text-center">
      <h2>Update Chocolate</h2>
      <Link to="/">Back to All Chocolates</Link>
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-pill"
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={name}
        />
        <br />
        <input
          className="my-2"
          type="text"
          name="country"
          placeholder="Country"
          defaultValue={country}
        />
        <br />
        <input
          className="my-2"
          type="text"
          name="category"
          placeholder="Category"
          defaultValue={category}
        />
        <br />
        <input
          className="my-2"
          type="text"
          name="photo"
          placeholder="Photo URL"
          // defaultValue={photo}
        />
        <br />
        <input className="my-2" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CoffeeDetails;
