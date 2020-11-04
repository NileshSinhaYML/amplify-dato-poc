import React from 'react';

import ListingCard from './ListingCard';
import './listingCard.scss';
import '../../containers/Dashboard/dashboard.scss';

export default {
  title: 'Listing card ',
  component: ListingCard,
};

const Template = (args) => (
  <div className="dashboard-container">
    <ListingCard {...args} />
  </div>
);

export const Title = Template.bind({});
Title.args = {
  customClass: 'dashboard-list-card',
  title: 'story post',
};

export const TitleWithDescription = Template.bind({});
TitleWithDescription.args = {
  customClass: 'dashboard-list-card',
  title: 'story post',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  title: 'story post',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five',
  thumbnail: {
    responsiveImage: {
      alt: null,
      aspectRatio: 1.5015015015015014,
      base64:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQFQ0NDh0VHhUdFxUZHRYVFhYmHysjGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLCg0OFRAQHS8dHRwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABAAGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAFBgAEB//EABwQAAICAwEBAAAAAAAAAAAAAAECAAQDBREyIv/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AC17qWfJhOtcSuR0xKp5G14+mJl5brWyAhimk0NtjdRwiSKWvbJiUdJkgn//Z',
      bgColor: '#c4c4c4',
      height: 666,
      sizes: '(max-width: 1000px) 100vw, 1000px',
      src: 'https://www.datocms-assets.com/36004/1602864071-volvo.jpg',
      srcSet:
        'https://www.datocms-assets.com/36004/1602864071-volvo.jpg?dpr=0.25 250w,https://www.datocms-assets.com/36004/1602864071-volvo.jpg?dpr=0.5 500w,https://www.datocms-assets.com/36004/1602864071-volvo.jpg?dpr=0.75 750w,https://www.datocms-assets.com/36004/1602864071-volvo.jpg 1000w',
      title: null,
      webpSrcSet:
        'https://www.datocms-assets.com/36004/1602864071-volvo.jpg?dpr=0.25&fm=webp 250w,https://www.datocms-assets.com/36004/1602864071-volvo.jpg?dpr=0.5&fm=webp 500w,https://www.datocms-assets.com/36004/1602864071-volvo.jpg?dpr=0.75&fm=webp 750w,https://www.datocms-assets.com/36004/1602864071-volvo.jpg?fm=webp 1000w',
      width: 1000,
    },
  },
  customClass: 'dashboard-list-card',
};
