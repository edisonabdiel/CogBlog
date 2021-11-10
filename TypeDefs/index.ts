import { Key } from "react";

export interface PostsType {
    [x: string]: any;
    title: string;
    excerpt?: string;
    content?: string,
    slug?: string,
    featuredImage?: {url: string},
    featuredPost?: boolean,
    author: AuthorType,
    categories?: string[],
};

export interface AuthorType {
    [x: string]: any;
    name: string,
    bio?: string,
    photo?: {url: string},
};

export interface CategoriesType {
    [x: string]: any;
    name?: string,
    slug?: string,
};

export interface CategoryType {
    [x: string]: any;
    name: string;
    slug: string;
    categories?: {category: CategoriesType} | string[];
};

export interface ServicesType {
    [x: string]: any;
    author: AuthorType;
    categories: CategoriesType[];
    createdAt: string;
    exerpt: string;
    featuredImage: { url: string };
    slug: string;
    title: string;
};

export interface PostWidgetType {
    categories?: CategoryType[] | null;
    category?: string | null;
    slug: string;
}

export interface PostType {
    post: PostsType;
    content?: {
         raw?: [string] | [];
     }
}

export interface CommentType {
    [x: string]: any;
    name: string;
    email: string;
    comment?: string;
    storeData?: boolean | string;
}

export interface ContentType {
    [x: string]: any;
    index?: Key;
    text?: {string: string};
    obj?: any;
    type?: string | undefined;
    (someArg: string): any | void;
}

export type ContentFuncType = (content: ContentType) => any; {

}

export interface AdjacentPostType {
    [x: string]: any;
    post: PostsType;
    position: string;
}