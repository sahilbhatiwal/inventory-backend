import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Chemical({ chemical,byid=false }) {
  return (
    <Col xs={6}>
      <Card style={{ width: "18rem", margin: 10 }}>
        <Card.Body>
          <Card.Title>chemical name: {chemical.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            qunatity: {chemical.quantity}
          </Card.Subtitle>
          <Card.Text>createdAt:{chemical.createdAt}</Card.Text>
          <Card.Text>updatedAt{chemical.updatedAt}</Card.Text>
          {byid && <Link to={`/chemical/${chemical._id}`}>view</Link>}
        </Card.Body>
      </Card>
    </Col>
  );
}
