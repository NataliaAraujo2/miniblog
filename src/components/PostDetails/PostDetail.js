import { FaEye } from "react-icons/fa";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./PostDetails.module.css";
import UserPhoto from "../UserPhoto/UserPhoto";

const PostDetail = ({ post }) => {
  // conversão do creatAt para formato de data e de hora
  const createAt = post.createAt;
  const date = createAt.toDate();
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <div className={styles.postdetail}>
      <div className={styles.titleimg}>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} />
      </div>

      <div className={styles.persondata}>
        <UserPhoto className={styles.userphoto} />
        <p>{post.createBy}</p>
      </div>

      {/* <p className={styles.createby}>
        Criado em: {formattedDate} {formattedTime}
      </p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
        
          </p>
        ))}
      </div>
      <div className={styles.sidebaritem}>
        <SidebarItem way={`/posts/${post.id}`} Icon={FaEye} Text="Ler" />
      </div> */}
    </div>
  );
};

export default PostDetail;
