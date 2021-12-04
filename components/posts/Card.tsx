import React from 'react';
import Image from 'next/image';
import { Post } from '@interfaces/post';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => (
  <div key={post.id} className="max-w-lg mx-auto">
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
      <a href="#">
        <Image
          src="/assets/img/post-sample1.png"
          width="1024"
          height="800"
          className="w-full"
          placeholder="blur"
          blurDataURL="/assets/img/gray.png"
        />
      </a>
      <div className="text-start p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {post.title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 pb-3">{post.body}</p>
        <div className="mt-4 mb-2">
          <a
            className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-blue-600 bg-blue-100 hover:text-blue-800 hover:bg-blue-100 active:bg-blue-200 focus:ring-blue-300"
            href="#"
          >
            상세 보기
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default PostCard;
