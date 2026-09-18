import { useFetch } from "../../Hooks/useFetch";
import style from "./Nyhedscard.module.scss";

const API_URL = "http://localhost:4000";
export function Nyhedscard() {
  const { data, isLoading, error } = useFetch(`${API_URL}/api/articles`);

  if (isLoading) return <p>Indlæser...</p>;
  if (error) return <p>Fejl ved hentning af data</p>;
  if (!data || data.length === 0) return <p>Ingen artikler fundet.</p>;

  return (
    <section className={style.Nyhedscard}>
      {data?.map((article) => (
        <div key={article.id}>
          <img
            className={style.images}
            src={`${API_URL}${article.imageUrl}`}
            alt={article.title}
          />
          <h2>{article?.title}</h2>
        </div>
      ))}
    </section>
  );
}
