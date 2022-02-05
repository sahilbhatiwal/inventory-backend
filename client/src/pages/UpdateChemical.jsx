import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router";

export default function UpdateChemical() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState("");
  const [chemical, setChemical] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    const chemical = { quantity };

    const response = await axios.put(
      "http://localhost:3001/api/chemical/" + id,
      chemical
    );
    console.log(response);

    setQuantity("");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/chemical/${id}`
        );
        setChemical(response.data.data);
      } catch (error) {
        console.log(error.response.data.message)
      }
    };
    getData();
  }, [chemical, id]);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Chemical qunatity update</Form.Label>
        {chemical && (
          <>
            <Form.Label>initial name: {chemical.name}</Form.Label>
            <Form.Label>initial quantity : {chemical.quantity}</Form.Label>
          </>
        )}
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
        update Chemical
      </Button>
    </Form>
  );
}
