import styles from "./Posts.module.css";

import { useEffect, useState } from "react";
import { fetchPosts } from "../../lib/apiReq";
import { Loader } from "../Loader/Loader";
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import { SinglePost } from "../SinglePost/SinglePost";

export function Posts() {
  const [isLoad, setLoad] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);

  async function getPosts() {
    setLoad(true);
    const res = await fetchPosts();
    if (res.success) setPosts(res.data!);
    else setErrMsg(res.msg!);
    setLoad(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={`${styles.posts}`}>
      <Loader isLoad={isLoad} />
      <ErrorMsg msg={errMsg} />
      {!isLoad && !posts.length ? <h3>No posts found</h3> : null}
      {posts.map((p) => (
        <SinglePost key={p.id} post={p} />
      ))}
    </div>
  );
}
