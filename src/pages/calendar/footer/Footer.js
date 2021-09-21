import React from 'react';
import { Wrapper } from '@root/pages/calendar/footer/styled';
import { AddEventContainer } from '@root/pages/calendar/footer/addEvent/AddTask';
import { SearchContainer } from '@root/pages/calendar/footer/search/Search';


export const Footer = () => (
  <Wrapper>
    <SearchContainer />
    <AddEventContainer />
  </Wrapper>
);
