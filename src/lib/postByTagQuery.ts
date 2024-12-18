import { wpQuery } from "./wpQuery";

export const postByTagQuery = async (tag: string) => {
    const data = await wpQuery({
        query: `
        query SingleTag($id: ID = "${tag}") {
          tag(idType: SLUG, id: $id) {
            posts(where: {orderby: {field: DATE, order: DESC}}) {
              nodes {
                date
                content
                title
                slug
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        }
        `
    });

    return data.tag.posts.nodes;
};
