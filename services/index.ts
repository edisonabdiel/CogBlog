import { request, gql } from "graphql-request";
import { CategoryType } from "../TypeDefs/Categories";
import { ServicesType } from "../TypeDefs/Services";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (): Promise<any> => {
  const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              excerpt
              title
              slug
              categories {
                name
                slug
              }
              featuredImage {
                url
              }
            }
          }
        }
      }
      
    `;
    
    
  const res: ServicesType = await request(graphqlAPI, query);
  return res?.postsConnection?.edges;
};

export const getRecentPosts = async (): Promise<any> => {
  const query = gql`
    query GetPostDetails() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          slug
          createdAt
        }
      }
      
    `;
    
    
  const res: ServicesType = await request(graphqlAPI, query);
  return res?.posts;
};

export const getSimilarPosts = async (categories: string[], slug: string): Promise<any> => {
  const query = gql`
    query GetPostDetails($slug: String!, categories: [String!]) {
        posts(
          where: {
            slug_not: $slug,
            AND: {
              categories_some: {
                slug_in: $categories
            }
          }
          orderBy: createdAt_ASC
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          slug
          createdAt
        }
      }
      
    `;
    
    
  const res: ServicesType = await request(graphqlAPI, query);
  return res?.postsConnection?.edges;
};
 
export const getCategories = async (): Promise<any> => {
  const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
      }
      
    `;
    
    
  const res: CategoryType = await request(graphqlAPI, query);
  return res?.categories;
};