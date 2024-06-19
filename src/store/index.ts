import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from '@store/counterSlice';
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  //here add all your reducers
  counter: counterReducer,
});

const storage: Storage = {
  setItem: (key, value) => {
    return AsyncStorage.setItem(key, value);
  },
  getItem: key => {
    return AsyncStorage.getItem(key);
  },
  removeItem: key => {
    return AsyncStorage.removeItem(key);
  },
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage,
  blacklist: ['counter'], // Put here the reducers that you don't want to be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// In order to always have typing please use these hooks throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = _useDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export const persistor = persistStore(store);
