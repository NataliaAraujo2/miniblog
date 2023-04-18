//CSS
import styles from "./Dashboard.module.css";
//Routes
import { Link } from "react-router-dom";
//context
import { useAuthValue } from "../../context/AuthContext";
//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetails/PostDetail";

const Dashboard = () => {
  //Users
  const { user } = useAuthValue();
  const uid = user.uid;

  //Posts
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h1>DASHBOARD</h1>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts!</p>
          <Link to="/posts/create" className="btn">
            CRIAR PRIMEIRO POST
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p>
      
        </div>
      )}
           {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
    </div>
  );
};

export default Dashboard;
