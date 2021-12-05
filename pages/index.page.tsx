import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import Header from '@components/layouts/Header';
import PostCard from '@components/posts/Card';
import { Post } from '@interfaces/post';
import { usePostsList } from '@api/posts';

const Home: NextPage = () => {
  const {
    data: postsList,
    isLoading,
    isSuccess,
  } = useQuery<Post[]>('postsList', usePostsList);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto pt-8 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postsList &&
            postsList?.map((post: Post, index) => (
              <PostCard key={index} post={post} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
