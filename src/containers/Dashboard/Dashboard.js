import React, { useState, useEffect } from 'react';
import { Image } from 'react-datocms';
import useGetAllPosts from '../../queries/useGetAllPosts';
import { isDataExists } from '../../utils/utils';

import './dashboard.scss';

const Dashboard = () => {
  const postsList = useGetAllPosts();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (postsList && isDataExists(postsList.allPosts)) {
      setPosts(postsList.allPosts);
    }
  }, [postsList]);

  /**
   * @description
   * Function to render the posts
   * @returns {node} the node list
   */
  const renderPost = (postData) =>
    postData.map((eachPost, index) => (
      <div className="dashboard-container-post" key={index}>
        <div className="dashboard-container-info">
          <h2 className="dashboard-container-title">{eachPost.title}</h2>
          <p className="dashboard-container-description">{eachPost.description}</p>
        </div>
        <Image
          className="dashboard-container-thumbnail"
          data={eachPost.thumbnail.responsiveImage}
        />
      </div>
    ));

  return <div className="dashboard-container">{posts && renderPost(posts)}</div>;
};

export default Dashboard;
