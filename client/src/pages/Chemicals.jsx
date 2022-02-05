import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Chemical from "../components/chemical";

export default function Chemicals() {
  const [chemicals, setChemicals] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:3001/api/chemical");
    setChemicals(response.data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="my-5">
      <Row>
        {chemicals.map((chemical) => {
          return <Chemical key={chemical._id} chemical={chemical} byid={true} />;
        })}
      </Row>
      <Link to="/chemical/create" className="btn btn-success">
        Create Chemcial
      </Link>
    </Container>
  );
}
