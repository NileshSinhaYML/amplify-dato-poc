import { useQuery } from 'graphql-hooks';

/**
 * @description
 * Function to return all the posts from the cms
 */
const useGetAllPosts = () => {
  const POSTS_QUERY = `query MyQuery {
    allPosts {
      updatedAt
      title
      id
      description
      thumbnail {
        alt
        responsiveImage  {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            bgColor
            base64
        }
      }
    }
  }`;
  const { data } = useQuery(POSTS_QUERY);
  return data;
};

export default useGetAllPosts;
