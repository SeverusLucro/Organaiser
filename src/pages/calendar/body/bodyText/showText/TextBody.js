import React from 'react';
import { ShowTextWrapper, Wrapper } from '@root/pages/calendar/body/bodyText/showText/styled';
import noneEvents from '@root/images/calendar-empty-ultrathin-page.png';
import delElement from '@root/images/clear.png';
import { useDispatch, useSelector } from 'react-redux';
import { addEventActions } from '@root/redux/redusers/addEventReducer';
import { addEventSelectors } from '@root/redux/selectors/addEventSelector';


export const TextBody = ({ dayEvents, cutting, newEvent }) => {
  const condition = dayEvents && dayEvents.length !== undefined && dayEvents.length !== 0;
  if (condition) {
    const eventElements = dayEvents.map((element, iteration) => {
      if (!element) return;
      return (
        <ShowTextWrapper key={`${iteration} ${dayEvents[iteration]}`}>
          <Wrapper.Options newEvent={newEvent}>
            <img src={delElement} onClick={cutting(iteration)} />
          </Wrapper.Options>
          <Wrapper.ShowText newEvent={newEvent}>
            {element}
          </Wrapper.ShowText>
        </ShowTextWrapper>
      );
    });
    return (
      <Wrapper flex justify align exist>
        {eventElements}
      </Wrapper>
    );
  }
  return (
    <Wrapper flex justify align>
      <Wrapper.Text>
        <Wrapper.Img alt="emptySlot" src={noneEvents} />
        Нет событий
      </Wrapper.Text>
    </Wrapper>
  );
};

export const TextBodyContainer = ({ dayEvents }) => {
  const dispatch = useDispatch();
  const newEvent = useSelector(addEventSelectors.getClickedAdd);

  const cutting = (position) => () => {
    dispatch(addEventActions.initEvent({ params: 'cut', position }));
  };

  return <TextBody cutting={cutting} dayEvents={dayEvents} newEvent={newEvent} />;
};
