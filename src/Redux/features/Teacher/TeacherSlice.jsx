import { createSlice } from '@reduxjs/toolkit';

export const TeacherSlice = createSlice({
    name: "teacher",
    initialState: {
        teachers:[]
    },
    reducers: {
        setTeachers: (state, action) => {
            state.teachers = action.payload;
        }
    }
});


export const { setTeachers } = TeacherSlice.actions;


export default TeacherSlice.reducer;