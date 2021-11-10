import React, { FC } from "react";
//Types
import { PostsType, PostType } from "../TypeDefs";
//Next modules
import Image from "next/image";
import Link from "next/link";
// Icons
import { GiSly } from "react-icons/gi";
// Middlewear
import moment from "moment";
//Uitilities
import { grpahCMSImageLoader } from '../util'

const PostCard: FC<PostType> = ({ post }) => {
  const data: PostsType = post?.node;

  return (
    <div className="bg-black bg-opacity-25 shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={data.featuredImage?.url}
          alt={data.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg pb-68 mb-6 rounded-lg"
          layout="fill"
        />
      </div>
      <h1 className="transition duration-500 text-center mb-7 cursor-pointer hover:text-purple-400 ease-in-out text-3xl font-light transform hover:-translate-y-1">
        <Link href={`/post/${data.slug}`} passHref>
        {data.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-cnter mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            src={data.author.photo.url}
            alt={data.author.name}
            unoptimized
            loader={grpahCMSImageLoader}
            height={30}
            width={30}
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-gray-400 ml-2 font-medium text-gray-600">{data.author.name}</p>
        </div>
        <div className="transition duration-500 text-2xl font-medium text-gray-500 hover:text-red-700 ease-in-out">
          <GiSly />
        </div>
          <span className="ml-8 align-middle font-medium text-gray-600">
            {moment(data.createdAt).format('MM DD, YYYY')}
          </span>
      </div>
      <p className="text-center text-lg text-gray-400 font-normal px-4 lg:px-20 mb-4">{data.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${data.slug}`} passHref>
          <span className="transition duration-500 text-gray-200 transform hover:-translate-y-1 inline-block bg-purple-700 tex-lg font-medium rounded-full px-5 py-2 cursor-pointer">Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
