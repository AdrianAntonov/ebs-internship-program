import styles from "./Posts.module.css";

function PostForm() {
  const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("posts");
  };

  return (
    <>
      <div>PostForm</div>
      <h4>Posts Form</h4>
      <form className={styles.formular} onSubmit={handleSubmitPost}>
        <input type="text" required />
        <textarea name="post" placeholder="Post here..." required />
        <input type="text" />
        <input type="date" />
        <button>Post</button>
      </form>
    </>
  );
}

export default PostForm;
