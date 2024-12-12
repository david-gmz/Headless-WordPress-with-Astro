import { wpQuery } from "./wpQuery";

export const fetchSinglePost = async (slug: string) => {
    const singleResponse = await wpQuery({
            query: `
        query SinglePost($id: ID = "${slug}") {
          post(idType: SLUG, id: $id) {
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
        })

    //  assign the post info to singlePost variable for usability
    return singleResponse.post;
};
