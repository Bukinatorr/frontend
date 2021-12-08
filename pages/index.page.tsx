import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { Post } from '@interfaces/post';
import { usePostsList } from '@api/posts';
import Main from '@layout';
import PostCard from '@components/posts/Card';

const Home: NextPage = () => {
  const {
    data: postsList,
    isLoading,
    isSuccess,
  } = useQuery<Post[]>('postsList', usePostsList);

  return (
    <Main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {postsList &&
          postsList?.map((post: Post, index) => (
            <PostCard key={index} post={post} />
          ))}
      </div>
    </Main>
  );
};

export default Home;
