import styles from "./Comments.module.css";

type SingleCommentProps = {
  comment: CommentType;
};

export function SingleComment({ comment }: SingleCommentProps) {
  return (
    <div className={styles.singleComment}>
      <h4>{comment.email}</h4>
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
    </div>
  );
}
