export interface PostsType {
        [x: string]: any;
        title?: string,
        excerpt?: string,
        content?: string,
        slug?: string,
        featuredImage?: string,
        featuredPost?: boolean,
        author?: string,
        categories?: string[],
}