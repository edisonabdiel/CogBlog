import React, { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';
import { PostsType } from '../TypeDefs';

const PostWidget: FC<{categories?: string[], slug?: string}> = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-black bg-opacity-25 shadow-xl rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-normal border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts?.map((post: PostsType) => (
        <div className="flex items-center w-full mb-4" key={post.title}>
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height={60}
              width={60}
              loader={grpahCMSImageLoader}
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <Link href={`/post/${post.slug}`} passHref>
              <a className="text-lg font-thin transition duration-500 text-center mb-7 cursor-pointer hover:text-purple-400 ease-in-out">
                {post.title}
              </a>
            </Link>
            <p className="text-sm text-gray-600">
              {moment(post.date).format("MMMM Do YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
