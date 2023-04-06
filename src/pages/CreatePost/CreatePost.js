import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validate image URL
    //criar o array de tags
    // checar todos

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createBy: user.displayName,
    });
    //redirect to home page
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>CREAT POST</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
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
          <span> Image URL: </span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que represente o seu texto"
            onChange={(e) => setImage(e.target.value)}
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
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span> Tags: </span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>

        {!response.loading && <button className="btn">REGISTER</button>}
        {response.loading && (
          <button className="btn" disable>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
