import styles from "./UserPhoto.module.css";
import { useAuthValue } from "../../context/AuthContext";
import { FaUserSecret } from "react-icons/fa";

const UserPhoto = () => {
  const { user } = useAuthValue();

  return (
    <div className={styles.photo}>
      {/* {user && user.photoURL === null ? (
        
        <FaUserSecret className={styles.photo} />
      ) : (
        <div>
          <img src={user.photoURL} alt="" className={styles.photo} />
        </div>
      )} */}
    </div>
  );
};
export default UserPhoto;
