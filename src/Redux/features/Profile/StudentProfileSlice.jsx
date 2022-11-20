import {createSlice} from '@reduxjs/toolkit';

export const StudentProfile=createSlice({
    name:"studentProfile",
    initialState:{
        teacherTab:false,
        journalTab:false,
        kollekvumTab:false,
        teachers:[],
        isActiveStudentDetail:false,
        serbestIsTab:false
    },
    reducers:{
        activateTeacherTab:(state,action)=>{
            state.teacherTab=action.payload;
        },
        activateJournalTab:(state,action)=>{
            state.journalTab=action.payload;
        },
        activateKollekvumTab:(state,action)=>{
            state.kollekvumTab=action.payload;
        },
        setTeachers:(state,action)=>{
            state.teachers=action.payload
        },
        activateStuedentDetail:(state,action)=>{
            state.isActiveStudentDetail=action.payload
        },
        activateSerbestIsTab:(state,action)=>{
            state.serbestIsTab=action.payload
        }
    }
});

export const {activateTeacherTab,activateJournalTab,activateKollekvumTab,setTeachers,activateStuedentDetail,activateSerbestIsTab} =StudentProfile.actions;

export default StudentProfile.reducer;