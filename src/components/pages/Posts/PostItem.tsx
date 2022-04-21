// import { useState } from "react";
// import Modal from "../../Modal/Modal";

interface IpostItemProps {
  id: number;
  title: string;
  area: string;
  link: string;
  date: string;
  // handlePostsList: () => void;
  handleEditPost: (id: number) => void;
  handleWarning: () => void;
  deletePostItem: (id: number) => void;
}

const PostItem: React.FC<IpostItemProps> = ({
  id,
  title,
  area,
  link,
  date,
  // handlePostsList,
  handleWarning,
  handleEditPost,
  deletePostItem,
}) => {
  const handleDeletePostItem = (id: number) => {
    // console.log(arg);
    // deletePost(id);
    handleWarning();
    // metoda  DELETE
    // handlePostsList();
    deletePostItem(id);
  };

  const handleEditPostItem = (id: number) => {
    handleEditPost(id);
    console.log("editUser, edit button");
  };

  return (
    <>
      {/* {deleteModal && <Modal onClose={onClose}></Modal>} */}
      <div key={id}>
        <p>{id}</p>
        <p>{title}</p>
        <p>{area}</p>
        <p>{link}</p>
        <p>{date}</p>
        <button onClick={() => handleEditPostItem(id)}>Edit</button>
        <button onClick={() => handleDeletePostItem(id)}>Delete</button>
      </div>
    </>
  );
};

export default PostItem;
