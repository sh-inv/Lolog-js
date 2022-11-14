import Post from './Post';

const PostSkeleton = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return arr.map(el => <Post key={el} />);
};

export default PostSkeleton;
