import { wpQuery } from "./wpQuery";

export const postByTagQuery = async (tag:any) => {
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

    //  assign the post info to singlePost variable for usability
    return data.tag.posts.nodes;
};
