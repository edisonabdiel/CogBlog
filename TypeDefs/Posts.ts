import { AuthorType } from "./Services";

export interface PostsType {
        [x: string]: any;
        title: string,
        excerpt?: string,
        content?: string,
        slug?: string,
        featuredImage?: {url: string},
        featuredPost?: boolean,
        author: AuthorType,
        categories?: string[],
};