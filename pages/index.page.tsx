import React from 'react';
import type { NextPage } from 'next';
import Header from 'components/layouts/Header';
import { useQuery } from 'react-query';
import { Post, usePostsList } from './api/posts';
import PostCard from 'components/posts/Card';

const Home: NextPage = () => {
  const {
    data: postsList,
    isLoading,
    isSuccess,
  } = useQuery<Post[] | null>('postsList', usePostsList);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto pt-8 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postsList &&
            postsList?.map((post: Post, index) => (
              <>
                <PostCard key={index} post={post} />
                <PostCard key={index + 1} post={post} />
                <PostCard key={index + 2} post={post} />
                <PostCard key={index + 3} post={post} />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
