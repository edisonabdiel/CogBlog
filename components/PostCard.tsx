import React, { FC } from 'react';
import { PostCardType } from '../TypeDefs/PostCard';
import Image from "next/image";



const PostCard: FC<PostCardType> = ({ post }) => {
    return (
        <>
          <div key={post.title}>
            {post.title}
            <br />
                {post.excerpt}
                <br />
          </div>
        </>
    )
}

export default PostCard;
