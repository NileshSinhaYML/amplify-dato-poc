import React, { useState, useEffect } from 'react';
import useGetAllPosts from '../../queries/useGetAllPosts';
import { isDataExists } from '../../utils/utils';
import ListingCard from '../../components/listingCard/ListingCard';
import DASHBOARD_CONSTANTS from './dashboard.constants';

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
   * @param {array} postData the post listing
   * @returns {node} the node list
   */
  const renderPost = (postData) =>
    postData.map(({ title, description, thumbnail, id }) => (
      <ListingCard
        key={id}
        title={title}
        description={description}
        thumbnail={thumbnail}
        id={id}
        customClass={DASHBOARD_CONSTANTS.CLASS_NAMES.LIST_CARD}
      />
    ));

  return <div className="dashboard-container">{posts && renderPost(posts)}</div>;
};

export default Dashboard;
