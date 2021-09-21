import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@root/root-saga';
import { rootReducer } from '@root/root-reducer';
import { loadState } from '@root/localStorage';


const saga = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), saga];

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState,
  devTools: window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  middleware,
});

store.subscribe(() => {
  localStorage.setItem('event', JSON.stringify(store.getState()));
});

window.store = store;

saga.run(rootSaga);
