import React, { FC } from "react";
//Types
import { PostsType } from "../TypeDefs";
//Next modules
import Image from "next/image";
import Link from "next/link";
// Icons
import { GiSly } from "react-icons/gi";
//Uitilities
import { grpahCMSImageLoader, formatDate } from '../util'

interface PostCardProps {
  post: PostsType | { node: PostsType };
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  // Handle both direct post and post with node structure
  const data: PostsType = 'node' in post ? post.node : post;

  return (
    <div className="bg-black bg-opacity-25 shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={data.featuredImage?.url}
          alt={data.title}
          loader={grpahCMSImageLoader}
          unoptimized
          fill
          className="object-top absolute h-80 w-full object-cover shadow-lg pb-68 mb-6 rounded-lg"
        />
      </div>
      <h1 className="transition duration-500 text-center mb-7 cursor-pointer hover:text-purple-400 ease-in-out text-3xl font-light transform hover:-translate-y-1">
        <Link href={`/post/${data.slug}`}>
          {data.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full ">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
          <Image
            src={data.author.photo.url}
            alt={data.author.name}
            unoptimized
            loader={grpahCMSImageLoader}
            height={30}
            width={30}
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-gray-400 ml-2 font-light text-lg titles-names">{data.author.name}</p>
        </div>
        <div className="transition duration-500 text-xl font-medium text-gray-500 hover:text-red-700 ease-in-out">
          <GiSly className="h-6 w-6 inline" />
        </div>
          <span className="ml-6 align-middle text-md text-gray-600">
            {formatDate(data.createdAt, 'MM DD, YYYY')}
          </span>
      </div>
      <p className="text-center text-lg text-gray-400 font-normal px-4 lg:px-20 mb-4">{data.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${data.slug}`} className="transition duration-500 text-gray-200 transform hover:-translate-y-1 inline-block bg-purple-700 tex-lg font-medium rounded-full px-5 py-2 cursor-pointer">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
