import { useFetch } from "../../Hooks/useFetch";
import style from "./Kategori.module.scss";
export function Mainkategori() {
  const { data } = useFetch("http://localhost:4000/api/job-categories");
  return (
    <>
      <div className={style.Kategoristyle}>
        {data &&
          data.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => Router.push(`/Soegside?categori=${item.name}`)}
              >
                <strong>{item.name}</strong>
                <p>{item.count}</p>
              </button>
            );
          })}
      </div>
    </>
  );
}
