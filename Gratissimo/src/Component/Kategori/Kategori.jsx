import { useFetch } from "../../Hooks/useFetch";
export function Mainkategori() {
  const { data } = useFetch("http://localhost:4000/api/job-categories");
  return (
    <>
      <select name="categori" id="categori">
        {data &&
          data.map((item) => {
            return (
              <option value="slug" key={item.id}>
                {item.name}
              </option>
            );
          })}
      </select>
    </>
  );
}
