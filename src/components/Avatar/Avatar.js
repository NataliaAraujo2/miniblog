
import styles from "./Avatar.module.css";
import SidebarItem from "../../components/SidebarItem/SidebarItem";
import { FaTimes } from "react-icons/fa";

const Avatar = ({ onClose = () => {} }) => {


  const avatars = [];
  const size = 100;
  for (let i = 0; i <= size; i++) {
    avatars.push(i);
  }

  // console.log(avatars);


  const srcAvatar = avatars.map(function (item) {
    return `https://api.dicebear.com/6.x/adventurer/svg?seed=${item}`;
  });

  // console.log(srcAvatar);

  const avatar = (e) => {
    const src = `${(e.target.src)}`
  
    console.log(src)

  };



  return (
    <div className={styles.screen}>
      <div className={styles.close}>
        <SidebarItem x={onClose} Icon={FaTimes} Text="Fechar" />
      </div>
      <div className={styles.avatar}>
        {srcAvatar.map((avatar) => (
          <form>
            <label>
              <img
                key={avatar}
                src={avatar}
                alt=""
                value={avatar}
                onClick={avatar}
                
              />
            </label>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
