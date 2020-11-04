import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import SideNav from './SideNav';

export default {
  title: 'side navigation',
  component: SideNav,
  decorators: [(getStory) => <MemoryRouter>{getStory()}</MemoryRouter>],
};

const Template = (args) => <SideNav {...args} />;

export const NavigationBar = Template.bind({});
