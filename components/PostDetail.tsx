import React, { FC, Fragment } from "react";
//Icons
import { GiDeathNote } from "react-icons/gi";
//Middleware
import moment from "moment";
import { ContentType, PostType } from "../TypeDefs";
//Next Components
import Image from "next/image";
//Utilities
import { grpahCMSImageLoader } from "../util";

const PostDetail: FC<PostType> = ({ post }) => {
  const getContentFragment = (index, text, obj, type?) => {
    // mutable var to hold the final content
    let modifiedText = text;
    //loop through the content and style it accordingly
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }
     console.log(obj)
   //checks content type and returns the appropriate element/component
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 post-content">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            unoptimized
            loader={grpahCMSImageLoader}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-black bg-opacity-25 shadow-xl rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md pb-80 mb-6">
          <Image
            src={post.featuredImage.url}
            alt={post.author.name}
            unoptimized
            loader={grpahCMSImageLoader}
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
            layout="fill"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <Image
                alt={post.author.name}
                height={30}
                width={30}
                className="align-middle rounded-full"
                src={post.author.photo.url}
                unoptimized
                loader={grpahCMSImageLoader}
              />
              <p className="inline align-middle text-gray-600 ml-2 font-medium text-sm titles-names">
                {post.author.name}
              </p>
            </div>
            <div className="transition duration-500 text-2xl font-medium text-gray-500 hover:text-red-700 ease-in-out pr-7">
              <GiDeathNote />
            </div>
            <div className="font-thin text-lg text-gray-600">
              <span className="align-middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {/* map over content children to determine obj type */}
          {/* @ts-ignore */}
          {post.content.raw.children.map((typeObj, index) => {
            const children: ContentType = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
