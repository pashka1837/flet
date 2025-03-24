type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UserType = {
  id: 1;
  name: string;
  username: string;
  email: string;
};

type CommentType = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
};
