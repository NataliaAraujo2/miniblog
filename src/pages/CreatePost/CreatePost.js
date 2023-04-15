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
  //Sim Não
  const [role, setRole]=useState("");
  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // checar todosos campos
    if (!title) {
      setFormError("Preencha o Título!");
      document.getElementById("title").focus();
      return;
    } else if (!tags) {
      setFormError("Preencha as Tags!");
      document.getElementById("tags").focus();
      return;
    } else if (!body) {
      setFormError("Preencha o Conteúdo!");
      document.getElementById("body").focus();
      return;
    } else if (!image) {
      setFormError("Preencha a Imagem!");
      document.getElementById("image").focus();
      return;
    }

    //validate image URL
    try {
      new URL(image);
    } catch (error) {
      console.log(error.message);

      let postImageUrlError;
      if (error.message.includes("URL")) {
        postImageUrlError = "A imagem precisa ser uma URL válida!";
      }
      setFormError(postImageUrlError);

      return;
    }

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
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
            id="title"
            name="title"
            placeholder="Pense num bom título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span> Conteúdo: </span>
          <textarea
            type="text"
            id="body"
            name="body"
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span> Tags: </span>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <label>
          <span>Include an image: </span>
           <input
            type="text"
            id="image"
            name="image"
            placeholder="Insira uma imagem que represente o seu texto"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        {!response.loading && <button className="btn">REGISTER</button>}
        {response.loading && (
          <button className="btn" disable>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
