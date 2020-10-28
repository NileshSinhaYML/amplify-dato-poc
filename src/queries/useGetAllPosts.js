/**
 * @description
 * Function to return all the posts from the cms
 * @param {string} locale the localisation language
 * @returns {string} the query parameter for the api call
 */
const getAllPostsQuery = (locale = 'en') =>
  `query  {
    allPosts ( locale: ${locale} ){
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

export default getAllPostsQuery;
