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

import SidebarItem from "../../components/SidebarItem/SidebarItem";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);
 
  
  return (
    <div className={styles.search_container}>
      <div className={styles.sidebaritem}>
      <SidebarItem way="/" Icon={FaArrowAltCircleLeft} Text="Voltar"></SidebarItem>
      </div>
      
      <h1>RESULTADOS</h1>

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
