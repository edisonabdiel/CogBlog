import { Key } from "react";

export interface PostsType {
    [x: string]: any;
    title?: string;
    excerpt?: string;
    content?: string;
    slug?: string;
    featuredImage?: { url: string };
    featuredPost?: boolean;
    author?: AuthorType;
    categories?: string[];
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
    storeData?: any;
    createdAt?: string;
}

export interface ContentType {
    index?: Key;
    text?: {string: string};
    obj?: any;
    type?: string | undefined;
    (someArg: string): any | void;
}

export type ContentFuncType = (content: ContentType) => any; {

}

export interface AdjacentPostType {
    post: PostsType;
    position: string;
}

export interface FeaturedPostType {
    post: PostsType;
 }