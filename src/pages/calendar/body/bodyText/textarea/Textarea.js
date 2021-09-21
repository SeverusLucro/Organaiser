import React, { useState } from 'react';
import { Wrapper } from '@root/pages/calendar/body/bodyText/textarea/styled';
import { useDispatch, useSelector } from 'react-redux';
import { addEventActions } from '@root/redux/redusers/addEventReducer';
import { addEventSelectors } from '@root/redux/selectors/addEventSelector';


export const TextareaContainer = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const clickedAdd = useSelector(addEventSelectors.getClickedAdd);

  const onChange = (e) => setValue(e.target.value);
  const save = () => {
    dispatch(addEventActions.initEvent({ value, params: 'comment' }));
    setValue('');
    dispatch(addEventActions.setClickedAdd(false));
  };

  const close = () => {
    dispatch(addEventActions.setClickedAdd(false));
  };

  return <Textarea value={value} clickedAdd={clickedAdd} onChange={onChange} save={save} close={close} />;
};

export const Textarea = ({ value, onChange, clickedAdd, save, close }) => (
  <Wrapper clickedAdd={clickedAdd}>
    <Wrapper.Textarea onChange={onChange} value={value} placeholder="Введите текст" />
    <Wrapper.WrapForButtons>
      <Wrapper.Button onClick={save} left>Save</Wrapper.Button>
      <Wrapper.Button onClick={close}>Close</Wrapper.Button>
    </Wrapper.WrapForButtons>
  </Wrapper>
);
