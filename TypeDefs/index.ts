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
    name: string,
    slug: string,
};

export interface CategoryType {
    [x: string]: any;
    name: string;
    slug: string;
    categories?: string[];
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
    post: PostsType
}