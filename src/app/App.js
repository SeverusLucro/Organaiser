import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { pagesLinks } from '@root/consts';

import { Wrapper } from '@root/styled';
import { CalendarContainer } from '@root/pages/calendar/CalendarContainer';


console.log = () => {};
console.warn = () => {};
console.error = () => {};
console.info = () => {};

export const App = () => (
  <Wrapper full center>
    <Switch>
      <Route exact path={pagesLinks.root} component={CalendarContainer} />
      <Route path="*">
        <Redirect to={pagesLinks.root} />
      </Route>
    </Switch>
  </Wrapper>
);
