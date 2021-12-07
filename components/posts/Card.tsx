import React from 'react';
import Image from 'next/image';
import { Post } from '@interfaces/post';
import ModalContainer from '@components/common/ModalContainer';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => (
  <div key={post.id} className='group relative'>
    <Image
      src="/assets/img/post-sample1.png"
      width="1024"
      height="1024"
      className="w-full object-center object-cover rounded-md"
      placeholder="blur"
      blurDataURL="/assets/img/gray.png"
    />
    <div className="p-1">
      <div className="text-lg font-medium">
        <span className="text-gray-900">{post.title}</span>
      </div>
      <div className="text-sm text-gray-500">{post.body}</div>
    </div>
  </div>
);

export default PostCard;
