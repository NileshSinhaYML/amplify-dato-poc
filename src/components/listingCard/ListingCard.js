import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Image } from 'react-datocms';
import './listingCard.scss';

/**
 * @description
 * Function to render the card component
 * @param {string} customClass the custom class for the component
 * @param {string} title the title of the card
 * @param {string} description the description of the card
 * @param {object} thumbnail the thumbnail image details
 * @returns {node} the card component
 */
const ListingCard = ({ customClass, title, description, thumbnail: { responsiveImage } }) => {
  /**
   * @description
   * Function to get the container class name
   * @returns {string} the container class name
   */
  const getContainerClass = () => cx(['list-card-container', customClass]);
  return (
    <div className={getContainerClass()}>
      <div className="description-section">
        <p className="listing-title">{title}</p>
        <p className="listing-description">{description}</p>
      </div>
      <div className="image-section">{responsiveImage && <Image data={responsiveImage} />}</div>
    </div>
  );
};

ListingCard.propTypes = {
  customClass: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.object,
};

ListingCard.defaultProps = {
  customClass: '',
  title: '',
  description: '',
  thumbnail: {},
};
export default ListingCard;
