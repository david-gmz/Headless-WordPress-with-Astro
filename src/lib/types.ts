export interface ItemSlugNodes {
    slug: string;
    name?: string;
    description?: string;
}
export interface WpCPTProperties {
    propertyFields: {
        latitude: string;
        longitude: string;
        price: number;
        squareFootage: number;
    };
    title: string;
    slug: string;
    featuredImage: null | {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
}
export interface WpGraphQLparams {
    query: string;
    variables?: object;
}
export interface WpPost {
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
