import { useFetch } from "../../Hooks/useFetch";

export function Mainslider() {
  const { data } = useFetch("http://localhost:4000/api/testimony");
  return <h4>her laver vi Mainslider</h4>;
}
