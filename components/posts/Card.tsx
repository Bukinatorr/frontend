import React from 'react';
import Image from 'next/image';
import Dompurify from 'dompurify';
import { Post } from '@interfaces/post';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => (
  <div
    key={post.id}
    className="rounded overflow-hidden shadow-sm border-2 border-gray-50"
  >
    <Image
      src="/assets/img/wisotge.png"
      width="1024"
      height="1024"
      className="w-full object-center object-cover rounded-md opacity-30"
      placeholder="blur"
      blurDataURL="/assets/img/gray.png"
    />
    <div className="px-4 py-4 border-t-2 border-gray-50">
      <div className="font-bold text-base mb-2 truncate ...">{post.title}</div>
      <p className="text-gray-700 text-sm  h-24 truncate-2-lines ...">
        {process.browser && (
          <div dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(post.body)}} 
          />
        )}
      </p>
    </div>
    <div className="px-3 py-2">
      <span className="normal-chip">#React</span>
      <span className="normal-chip">#NextJS</span>
    </div>
  </div>
);

export default PostCard;
