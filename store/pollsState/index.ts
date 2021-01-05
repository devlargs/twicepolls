import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps } from "store/types";
import getFirestoreCollection from "utils/auth/getFirestoreCollection";

const db = getFirestoreCollection("polls");

const initialState = {
  loading: true,
  data: [],
};

export const pollSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    setLists: (state, { payload }) => {
      return {
        ...state,
        data: payload,
      };
    },
    setLoading: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },
  },
});

export const pollsReducer = pollSlice.reducer;

export const usePolls = () => {
  const dispatch = useDispatch();
  const { actions } = pollSlice;

  useEffect(() => {
    const unsubscribe = db.onSnapshot((snapshot) => {
      const ref = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch(actions.setLists(ref));
      dispatch(actions.setLoading(false));
    });

    return () => unsubscribe();
  }, []);

  return {
    lists: useSelector((state: StoreProps) => state.polls.data),
    loading: useSelector((state: StoreProps) => state.polls.loading),
  };
};
