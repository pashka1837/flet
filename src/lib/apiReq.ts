const baseUrl = import.meta.env.VITE_BASE_URL;

export async function fetchPosts() {
  try {
    const res = await fetch(`${baseUrl}/posts`);
    if (!res.ok) return { success: false, msg: "Error happend" };
    const data = (await res.json()) as PostType[];
    return { success: true, data };
  } catch {
    return { success: false, msg: "Error happend" };
  }
}

export async function fetchComments(postId: string) {
  try {
    const res = await fetch(`${baseUrl}/posts/${postId}/comments`);
    if (!res.ok) return { success: false, msg: "Error happend" };
    const data = (await res.json()) as CommentType[];
    return { success: true, data };
  } catch {
    return { success: false, msg: "Error happend" };
  }
}
