import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps } from "store/types";

const initialState = {
  loading: false,
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

  return {
    lists: useSelector((state: StoreProps) => state.polls.data),
    loading: useSelector((state: StoreProps) => state.polls.loading),
    setLists: (data: Array<any>) => {
      dispatch(actions.setLists(data));
    },
    setLoading: (bool: boolean) => {
      dispatch(actions.setLoading(bool));
    },
  };
};
