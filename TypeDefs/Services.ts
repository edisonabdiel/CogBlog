
export interface AuthorType {
    [x: string]: any;
    name: string,
    id: string,
    bio?: string,
    photo?: {url: string},
};

export interface CategoriesType {
    [x: string]: any;
    name: string,
    slug: string,
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