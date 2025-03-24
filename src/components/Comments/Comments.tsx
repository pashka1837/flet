import { Fragment } from "react/jsx-runtime";
import styles from "./Comments.module.css";
import { SingleComment } from "./SingleComment";

type CommentsProps = {
  comments: CommentType[];
};

export function Comments({ comments }: CommentsProps) {
  if (!comments.length) return null;
  return (
    <div className={styles.comments}>
      <h3 style={{ color: "var(--main-color)" }}>Comments:</h3>
      {comments.map((c) => (
        <Fragment key={c.id}>
          <SingleComment comment={c} />
          <hr />
        </Fragment>
      ))}
    </div>
  );
}
