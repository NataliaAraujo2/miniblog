import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setbody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubimt = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>CREAT POST</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <label>
        <span> Title: </span>
        <input
          type="text"
          name="title"
          required
          placeholder="Pense num bom título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span> Image: </span>
        <input
          type="text"
          name="image"
          required
          placeholder="Insira uma imagem que represente o seu texto"
          onChange={(e) => setTitle(e.target.value)}
          value={image}
        />
      </label>
      <label>
        <span> Conteúdo: </span>
        <textarea
          type="text"
          name="body"
          required
          placeholder="Insira o conteúdo do post"
          onChange={(e) => setTitle(e.target.value)}
          value={body}
        ></textarea>
      </label>
    </div>
  );
};

export default CreatePost;
