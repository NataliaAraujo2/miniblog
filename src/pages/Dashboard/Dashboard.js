//CSS
import styles from "./Dashboard.module.css";
//Routes
import { Link } from "react-router-dom";
//context
import { useAuthValue } from "../../context/AuthContext";
//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";


const Dashboard = () => {
  //Users
  const { user } = useAuthValue();
  const uid = user.uid;

  //Posts
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregango...</p>;
  }

  return (
    <div className={styles.dashboard}>
      <h2>DASHBOARD</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts!</p>
          <Link to="/posts/create" className="btn">
            CRIAR PRIMEIRO POST
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Título</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div className={styles.post_row_bottoms}>
                  <div className={styles.button}>
                   
                    <Link to={`/posts/${post.id}`} >
                      VER
                    </Link>
                  </div>
                  <div className={styles.button}>
                    <Link
                      to={`/posts/edit/${post.id}`}
                    >
                      EDITAR
                    </Link>
                  </div>
                  <div className={styles.button}>
                    <button
                      onClick={() => deleteDocument(post.id)}
                    >
                      EXCLUIR
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
