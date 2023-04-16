import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createBy}</p>
      <div>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
            {/* {console.log(post.tagArray)} */}
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
