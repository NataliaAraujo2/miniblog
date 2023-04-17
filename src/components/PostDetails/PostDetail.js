import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createby}>{post.createBy}</p>
      
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
            {/* {console.log(post.tagsArray)} */}
          </p>
        ))}
        
      </div>
     
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        LER
      </Link>
    </div>
  );
};

export default PostDetail;
