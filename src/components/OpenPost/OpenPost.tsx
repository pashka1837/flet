import { useEffect, useState } from "react";
import styles from "./OpenPost.module.css";
import { fetchComments } from "../../lib/apiReq";
import { Loader } from "../Loader/Loader";
import { Comments } from "../Comments/Comments";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";

type OpenPostProps = {
  post: PostType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function OpenPost({ post, setOpen }: OpenPostProps) {
  const [isLoad, setLoad] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [comments, setComments] = useState<CommentType[]>([]);

  async function getComments() {
    setLoad(true);
    const res = await fetchComments(`${post.id}`);
    if (res.success) setComments(res.data!);
    else setErrMsg(res.msg!);
    setLoad(false);
  }

  useEffect(() => {
    getComments();
    window.addEventListener("keyup", handleEscKey);
    return () => window.removeEventListener("keyup", handleEscKey);
  }, []);

  function handleOusideClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  function handleEscKey(e: KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
  }

  function handleCloseBtn() {
    setOpen(false);
  }

  return (
    <div
      onClick={handleOusideClick}
      className={`${styles.openPostOuter} openPost`}
      role="button"
    >
      <div className={`${styles.openPostInner}`}>
        <button className={styles.closeBtn} onClick={handleCloseBtn}>
          &times;
        </button>
        <div className={styles.postData}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        <hr />
        <Loader isLoad={isLoad} />
        <ErrorMsg msg={errMsg} />
        {!isLoad && !comments.length ? <h3>No comments found</h3> : null}
        <Comments comments={comments} />
      </div>
    </div>
  );
}
