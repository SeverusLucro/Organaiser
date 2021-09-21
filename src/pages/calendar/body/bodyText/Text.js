import React from 'react';
import { TextareaContainer } from '@root/pages/calendar/body/bodyText/textarea/Textarea';
import { TextBodyContainer } from '@root/pages/calendar/body/bodyText/showText/TextBody';
import { Wrapper } from '@root/pages/calendar/body/bodyText/styled';


export const BodyText = ({ dayEvents }) => (
  <Wrapper>
    <TextBodyContainer dayEvents={dayEvents} />
    <TextareaContainer />
  </Wrapper>
);
