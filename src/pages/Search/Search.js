import React from "react";
//styles
import styles from "./Search.module.css";
//rooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
//component
import PostDetail from "../../components/PostDetails/PostDetail";
//route
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div>
      <h2>Search</h2>
      <div>
        {posts && posts.lenght === 0 && (
            <>
            <p>Não forma encontrados posts a partir da sua busca...</p>
            <Link to="/" className="btn btn-dark"></Link>
            </>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
