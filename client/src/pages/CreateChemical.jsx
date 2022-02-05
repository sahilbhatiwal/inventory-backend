import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function CreateChemical() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    console.log(name, quantity);
  }, [name, quantity]);

  const submitForm = async (event)=>{
    event.preventDefault();

    const chemical ={ name, quantity};

    const response = await axios.post("http://localhost:3001/api/chemical",chemical);
    console.log(response);

    setName("");
    setQuantity("");

  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Chemical Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter chemical name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Chemical qunatity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" onClick={submitForm}>
        Add Chemical
      </Button>
    </Form>
  );
}
