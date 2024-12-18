import { wpQuery } from "./wpQuery";

type ItemType = "post" | "property";
/**
 * Fetches a single item from WordPress by its slug
 * @param slug - The URL slug of the item to fetch
 * @param item - The type of item to fetch (e.g. "post", "property")
 * @returns The item data from WordPress including title, content, featured image etc
 * @throws Error if the item type is invalid
 */
export const getSingleItemBySlug = async (slug: string, item: ItemType) => {
    const query =
        item !== "property"
            ? `
  query SinglePost($id: ID = "${slug}") {
    ${item}(idType: SLUG, id: $id) {
      date
      content
      title
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
  `
            : `
        query propertyBySlug($id: ID = "${slug}") {
          property(idType: SLUG, id: $id) {
            propertyFields {
              latitude
              longitude
              price
              squareFootage
            }
            title(format: RENDERED)
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
        `;
  const data = await wpQuery({ query });
  if (!data[item]) throw new Error(`Invalid item parameter ${item}`);
  
    //  assign the post info to singlePost variable for usability
    return data[item];
};
