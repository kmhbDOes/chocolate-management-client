import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCardDetails = ({ c }) => {
  const { _id, name, category, country, photo } = c;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolate/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body className="">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/coffee-details/${_id}`}>
            <Button className="mx-2" variant="primary">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete(_id)}
            className="bg-warning"
            variant="primary"
          >
            X
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoffeeCardDetails;
