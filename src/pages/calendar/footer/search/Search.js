import React, { useState } from 'react';
import { WrapperElements } from '@root/pages/calendar/footer/styled';
import image from '@root/images/loupe.png';
import { useDispatch, useSelector } from 'react-redux';
import { addEventActions } from '@root/redux/redusers/addEventReducer';
import { addEventSelectors } from '@root/redux/selectors/addEventSelector';


export const Search = ({ onClick, onButtonClick, clickedSearch, onKeyUp, value, onChange }) => (
  <WrapperElements search>
    <WrapperElements.Input clickedSearch={clickedSearch} onKeyUp={() => onKeyUp(value)} onChange={onChange} />
    <WrapperElements.Button clickedSearch={clickedSearch} onClick={onButtonClick}>close</WrapperElements.Button>
    <WrapperElements.Img
      alt="search"
      src={image}
      onClick={onClick}
      clickedSearch={clickedSearch}
    />
    Поиск
  </WrapperElements>
);

export const SearchContainer = () => {
  const dispatch = useDispatch();
  const clickedSearch = useSelector(addEventSelectors.getClickedSearch);
  const events = useSelector(addEventSelectors.getComments);
  const [value, setValue] = useState('');

  const onKeyUp = (text) => dispatch(addEventActions.initEvent({ params: 'search', text }));

  const onChange = (e) => setValue(e.target.value);

  const onClick = () => {
    if (!events || events.length < 1) return;
    dispatch(addEventActions.setClickedSearch(true));
  };

  const onButtonClick = () => dispatch(addEventActions.setClickedSearch(false));

  return (
    <Search
      clickedSearch={clickedSearch}
      value={value}
      onKeyUp={onKeyUp}
      onChange={onChange}
      onClick={onClick}
      onButtonClick={onButtonClick}
    />
  );
};
