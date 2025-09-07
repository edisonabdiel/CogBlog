import { Key } from "react";

// API Response Types
export interface APIResponse<T> {
    data: T;
    error?: string;
    message?: string;
}

export interface GraphQLResponse<T> {
    data: T;
    errors?: Array<{
        message: string;
        locations?: Array<{
            line: number;
            column: number;
        }>;
        path?: string[];
    }>;
}

export interface PostsConnection {
    postsConnection: {
        edges: Array<{
            cursor: string;
            node: PostsType;
        }>;
    };
}

export interface PostsType {
    title?: string;
    excerpt?: string;
    content?: {
        raw?: any;
    };
    slug?: string;
    featuredImage?: { url: string };
    featuredPost?: boolean;
    author?: AuthorType;
    categories?: CategoriesType[];
    createdAt?: string;
    id?: string;
};

export interface AuthorType {
    name: string,
    bio?: string,
    photo?: {url: string},
};

export interface CategoriesType {
    name?: string,
    slug?: string,
};

export interface CategoryType {
    name: string;
    slug: string;
    categories?: {category: CategoriesType} | string[];
};

export interface ServicesType {
    author: AuthorType;
    categories: CategoriesType[];
    createdAt: string;
    exerpt: string;
    featuredImage: { url: string };
    slug: string;
    title: string;
};

export interface PostWidgetType {
    categories?: CategoryType[];
    category?: string;
    slug?: string;
}

export interface PostType {
    post: PostsType;
    content?: {
         raw?: [string] | [];
     }
}

export interface CommentType {
    name: string;
    email: string;
    comment?: string;
    storeData?: boolean;
    createdAt?: string;
    id?: string;
}

export interface ContentType {
    index?: Key;
    text?: string;
    children?: ContentType[];
    type?: string;
    raw?: any;
}

export type ContentFuncType = (content: ContentType) => any;

export interface AdjacentPostType {
    post: PostsType;
    position: string;
}

export interface FeaturedPostType {
    post: PostsType;
 }