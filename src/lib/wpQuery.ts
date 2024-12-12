import { API_BASE_URL } from "astro:env/server";

interface WPGraphQLparams {
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

export async function wpQuery({ query, variables = {} }: WPGraphQLparams) {
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query,
            variables
        })
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const { data } = await response.json();

    return data;
}
