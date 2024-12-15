import type { WPGraphQLparams } from "./types";
import { API_BASE_URL } from "astro:env/server";

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
