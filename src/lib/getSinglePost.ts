import { wpQuery } from "./wpQuery";

export const getSinglePost = async (slug: string) => {
    const data = await wpQuery({
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
    return data.post;
};
