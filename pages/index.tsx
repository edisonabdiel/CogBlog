import { FeaturedPosts } from '../sections/index';
// Next Modules
import type { NextPage } from "next";
import Head from "next/head";
//Types
import { PostsType } from "../TypeDefs";
// Custom Components
import { PostCard, Categories, PostWidget } from "../components";
// Data
import { getPosts } from "../services";

const Home: NextPage<{ posts: Array<{ node: PostsType }> }> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: { node: PostsType }, index: number) => (
            <PostCard post={post.node} key={post?.node?.slug || `post-${index}`} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: { posts: Array<{ node: PostsType }> } }> {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}

export default Home;
