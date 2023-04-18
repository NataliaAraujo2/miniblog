//CSS
import styles from "./Dashboard.module.css";
//Routes
import { Link } from "react-router-dom";
//context
import { useAuthValue } from "../../context/AuthContext";
//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  //Users
  const { user } = useAuthValue();
  const uid = user.uid;

  //Posts
  const posts = [];

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
    </div>
  );
};

export default Dashboard;
