import { wpQuery } from "./wpQuery";

type ItemType = "tutorial" | "bitacora";
/**
 * Fetches a single item from WordPress by its slug
 * @param slug - The URL slug of the item to fetch
 * @param item - The type of item to fetch (e.g. "post", "property")
 * @returns The item data from WordPress including title, content, featured image etc
 * @throws Error if the item type is invalid
 */
export const getSingleItemBySlug = async (slug: string, item: ItemType) => {
    const query =
        item !== "bitacora"
            ? `
  query SinglePost($id: ID = "${slug}") {
    ${item}(idType: SLUG, id: $id) {
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
        query bitacoraBySlug($id: ID = "${slug}") {
          bitacora(idType: SLUG, id: $id) {
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            content
            lugar {
              ciudad
              fecha
              nombreDelPais
            }
            title(format: RENDERED)
            ruta {
              coordenadas {
                longitud
                latitud
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
