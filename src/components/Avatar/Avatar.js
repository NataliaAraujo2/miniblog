import styles from "./Avatar.module.css";
import { FaUndoAlt, FaUserSecret } from "react-icons/fa";
import { useState } from "react";
import SidebarItem from "../SidebarItem/SidebarItem";

const Avatar = () => {
  const [chooseAvatar, setChooseAvatar] = useState(false);
  const [chosenAvatar, setChosenAvatar] = useState(false);
  const [src, setSrc] = useState("");
  const [photoURL, setPhotoURL] = useState("")
 

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

  const chosen = (e) => {
    const src = e.target.src;

    console.log(src);
    setChosenAvatar(true);
    setChooseAvatar(false);
    setSrc(src);
    setPhotoURL(src)
  };

  const undo = () => {
    setChooseAvatar(false);
    setChosenAvatar(false);
  };
  return (
    <div className={styles.avatar}>
      {!chooseAvatar && !chosenAvatar && (
        <label>
          <FaUserSecret />
          <div
            className={styles.showtext}
            onClick={() => setChooseAvatar(true)}
          >
            Escolha seu avatar!
          </div>
        </label>
      )}

      {chooseAvatar && (
        <div id="chooseavatar" className={styles.screen}>
          <div className={styles.avatarchoose}>
            {srcAvatar.map((avatar) => (
              <label>
                <img
                  key={avatar}
                  src={avatar}
                  alt=""
                  value={avatar}
                  onClick={chosen}
                />
              </label>
            ))}
          </div>
        </div>
      )}

      {chosenAvatar && !chooseAvatar && (
        <label className={styles.avatarchosen}>
         
          <img
            id="img"
            src={src}
            alt=""
            value={src}
          />
          <input
          
           type="text"
           name="photoURL"
           required
           placeholder={photoURL}
           value={photoURL}
           onChange={(e) => setPhotoURL(e.target.value)}
         />
         

          <SidebarItem
            x={undo}
            className={styles.sidebaritem}
            Icon={FaUndoAlt}
          />
        </label>
      )}
    </div>
  );
};

export default Avatar;
