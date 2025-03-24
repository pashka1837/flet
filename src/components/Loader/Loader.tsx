import styles from "./Loader.module.css";

type LoaderProps = {
  height: number;
  width: number;
};

export function Loader({ height = 48, width = 48 }: LoaderProps) {
  return <span className={styles.loader} style={{ height, width }}></span>;
}
