import { API_BASE_URL } from "./apiUrl";

export const fetchSinglePost = async (slug: string) => {
    const singleResponse = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
        query SinglePost($id: ID = "${slug}") {
          post(idType: SLUG, id: $id) {
            date
            content
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        `
        })
    });

    // destructure data from our JSON
    const { data } = await singleResponse.json();

    //  assign the post info to singlePost variable for usability
    return data.post;
};
