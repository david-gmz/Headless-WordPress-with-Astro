import { wpQuery } from "./wpQuery";

type ItemTypes = "bitacorasDeViaje" | "tutoriales" | "tags";

/**
 * Retrieves all slugs for a given item type (e.g., posts, properties, tags).
 * @param items - The type of items to retrieve slugs for (e.g., "posts", "properties", "tags").
 * @returns An array of slugs for the given item type.
 */
export async function getAllItemSlugs(items: ItemTypes) {
    const query =
        items !== "tags"
            ? `
        query AllItemSlugs {
            ${items} {
                nodes {
                    slug
                }
            }
        }
    `
            : `
    query AllTagSlugs {
            tags {
                nodes {
                    name
                    description
                    slug
                }
            }
        }
    `;

    const data = await wpQuery({ query });

    if (!data[items] || !data[items].nodes) {
        throw new Error(
            `Invalid items parameter or no nodes found for ${items}`
        );
    }

    return data[items].nodes;
}
