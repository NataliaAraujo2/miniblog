import React from "react";
//styles
import styles from "./Search.module.css";
//rooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
//component
import PostDetail from "../../components/PostDetails/PostDetail";
//route
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);
  const [queryi, setQuery] = useState("");
 

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${queryi}`);
    }
  };
  return (
    <div className={styles.search_container}>
      <h1>RESULTADOS</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button">Pesquisar</button>
      </form>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não forma encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark">Voltar</Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
