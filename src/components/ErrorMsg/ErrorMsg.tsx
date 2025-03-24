import styles from "./ErrorMsg.module.css";

type ErrorMsgProps = {
  msg?: string;
};

export function ErrorMsg({ msg }: ErrorMsgProps) {
  if (!msg) return null;
  return <p className={styles.errorMsg}>{msg}</p>;
}
