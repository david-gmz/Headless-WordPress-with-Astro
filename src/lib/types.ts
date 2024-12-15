export interface Tag {
    slug: string;
    name: string;
    description: string;
}
export interface WPGraphQLparams {
    query: string;
    variables?: object;
}
export interface WPPost {
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    featuredImage: null | {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
}

export type PaginateFn<T> = (
    items: T[],
    options?: {
        pageSize?: number;
    }
) => {
    params: { page: string | number };
    props: {
        page: {
            data: T[];
            currentPage: number;
            lastPage: number;
            // Add other properties as needed
            // You might want to include total count, etc.
        };
    };
};