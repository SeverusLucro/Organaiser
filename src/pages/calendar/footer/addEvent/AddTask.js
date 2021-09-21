import React from 'react';
import { WrapperElements } from '@root/pages/calendar/footer/styled';
import image from '@root/images/plus.png';
import { useDispatch } from 'react-redux';
import { addEventActions } from '@root/redux/redusers/addEventReducer';


export const AddEvent = ({ onClick }) => (
  <WrapperElements>
    <img src={image} onClick={() => onClick(true)} />
    Добавить
  </WrapperElements>
);

export const AddEventContainer = () => {
  const dispatch = useDispatch();

  const onClick = (event) => {
    dispatch(addEventActions.setClickedAdd(event));
  };

  return <AddEvent onClick={onClick} />;
};
