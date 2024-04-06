import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const checkItemSlice = createSlice({
  name: "checkItemSlice",
  initialState: initialState,
  reducers: {
    FETCH_CHECKITEMS_SUCCESS(state, action) {
      const { data, checkListId } = action.payload;
      state[checkListId] = {
        checkItemData: data,
        checkItemName: "",
        toggleAddItem: true,
        checkItemLoading: false,
        errorState: false,
      };
    },
    FETCH_CHECKITEMS_FAILED(state, action) {
      const { checkListId } = action.payload;
      state[checkListId] = {
        checkItemData: data,
        checkItemName: "",
        toggleAddItem: true,
        checkItemLoading: false,
        errorState: true,
      };
    },
    ADD_ITEM_SUCCESS(state, action) {
      const { data, checkListId } = action.payload;
      state[checkListId].checkItemData.push(data);
    },
    ADD_ITEM_FAILED(state, action) {
      const { checkListId } = action.payload;
      state[checkListId].errorState = true;
    },
    Delete_Item_Success(state, action) {
      const { checkListId , checkItemId } = action.payload;
    //   {checkItemId , checkItemId}
      state[checkListId].checkItemData = state[
        checkListId
      ].checkItemData.filter((curr) => curr.id !== checkItemId);
    },
    Delete_Item_Failed(state, action) {
      const { checkListId } = action.payload;
      state[checkListId].errorState = true;
    },
  },
});

export const {
  FETCH_CHECKITEMS_SUCCESS,
  FETCH_CHECKITEMS_FAILED,
  ADD_ITEM_SUCCESS,

  ADD_ITEM_FAILED,
  Delete_Item_Failed,
  Delete_Item_Success,
} = checkItemSlice.actions;

export default checkItemSlice;
