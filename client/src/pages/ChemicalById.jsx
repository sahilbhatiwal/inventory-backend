import { useParams } from "react-router";

export default function ChemicalById(props) {
    let {id} = useParams();
  return <div>
      {`chemical ${id} `}
  </div>;
}
