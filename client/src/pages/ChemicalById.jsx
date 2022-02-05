import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Chemical from "../components/chemical";

export default function ChemicalById(props) {
    let {id} = useParams();

    const [chemical, setChemical] = useState(null);
    useEffect(() => {
      const getData = async()=>{
        const response = await axios.get(`http://localhost:3001/api/chemical/${id}`);
        setChemical(response.data.data);
      }
      getData();
    }, []);
    
  if(!chemical)
  {
    return <h1>Loading</h1>
  }
  return (
    <div>
      <Chemical chemical={chemical} />

      <Link to={`/chemical/update/${chemical._id}`} className="btn btn-primary">update chemical</Link>
      <Button className="btn btn-danger" onClick={async()=>{
          
          const res = await axios.delete(`http://localhost:3001/api/chemical/${chemical._id}`);

          console.log(res);
          window.location = "/chemical";
          
      }}>delete chemical</Button>
    </div>
  );
}
