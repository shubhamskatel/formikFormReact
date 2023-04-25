import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  userData: [],
  singleData: {},
  index: 0,
  editStatus: false,
};

export const userDataSlice = createSlice({
  name: "totalData",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
    deleteData: (state, action) => {
      const updatedUserData = [...state.userData];
      updatedUserData.splice(action.payload, 1);
      state.userData = updatedUserData;
    },
    getSingleUserData: (state, action) => {
      state.index = action.payload;
      state.singleData = state.userData[state.index];
      state.editStatus = true;
    },
    setSingleUserData: (state, action) => {
      const tempData = state.userData;
      tempData[action.payload.index] = action.payload.data;

      state.userData = tempData;
      state.editStatus = false;
      state.index = 0;
      state.singleData = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData, deleteData, setSingleUserData, getSingleUserData } =
  userDataSlice.actions;

export default userDataSlice.reducer;
