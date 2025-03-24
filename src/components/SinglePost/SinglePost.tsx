import { useState } from "react";
import styles from "./SinglePost.module.css";
import { OpenPost } from "../OpenPost/OpenPost";

type SinglePostProps = {
  post: PostType;
};

export function SinglePost({ post }: SinglePostProps) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className={styles.singlePost}
        role="button"
        onClick={() => setOpen(true)}
      >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      {isOpen && <OpenPost post={post} setOpen={setOpen} />}
    </>
  );
}
