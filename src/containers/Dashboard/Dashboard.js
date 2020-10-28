import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useManualQuery } from 'graphql-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import getAllPostsQuery from '../../queries/useGetAllPosts';
import { isDataExists } from '../../utils/utils';
import { listAllPosts, resetDataLoadedState } from './dashboard.actions';
import ListingCard from '../../components/listingCard/ListingCard';
import DASHBOARD_CONSTANTS from './dashboard.constants';
import loader from '../../assets/images/spinner.svg';

import './dashboard.scss';

const Dashboard = () => {
  const [language, updateLanguage] = useState(DASHBOARD_CONSTANTS.LOCALES.ENGLISH);
  const dispatch = useDispatch();
  const [getPosts, { loading, data }] = useManualQuery(getAllPostsQuery(language));
  const { posts, hasDataLoaded } = useSelector((state) => state.post);
  useEffect(() => {
    if (!loading && data) {
      dispatch(listAllPosts(data.allPosts));
    }
  }, [dispatch, loading, data]);

  useEffect(() => {
    if (!hasDataLoaded) {
      getPosts();
    }
  }, [getPosts, hasDataLoaded]);

  /**
   * @description
   * Function to get the query locale language
   * @returns {string} the query locale language
   */
  const getLanguage = () =>
    language === DASHBOARD_CONSTANTS.LOCALES.ENGLISH
      ? DASHBOARD_CONSTANTS.LOCALES.SPANISH
      : DASHBOARD_CONSTANTS.LOCALES.ENGLISH;

  /**
   * @description
   * Function to handle the translate icon click
   */
  const handleTranslateClick = () => {
    dispatch(resetDataLoadedState());
    updateLanguage(getLanguage());
  };

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

  return (
    <div className="dashboard-container">
      {!hasDataLoaded && <img src={loader} alt="loader" className="loader" />}
      {isDataExists(posts) && renderPost(posts)}
      <div
        className="font-awesome-dangle"
        role="button"
        onClick={handleTranslateClick}
        title={DASHBOARD_CONSTANTS.TRANSLATE}
      >
        <FontAwesomeIcon icon={faLanguage} border size="2x" className="translate-icon" />
      </div>
    </div>
  );
};

export default Dashboard;
