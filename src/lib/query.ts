const API_BASE_URL = "https://viajoenbici.local/graphql";

const fetchPosts = async () => {
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
        query HomePageQuery {
          posts(where: {orderby: {field: DATE, order: DESC}}) {
            nodes {
              slug
              date
              title
              excerpt
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `
        })
    });

    const { data } = await response.json();
    return data.posts.nodes;
};

export const posts = await fetchPosts();
