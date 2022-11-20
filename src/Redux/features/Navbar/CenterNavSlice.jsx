import {createSlice} from '@reduxjs/toolkit';

export const centerNavSlice=createSlice({
    name:"centerNav",
    initialState:{
        isMenuVisible:false,
        isProfileFilter:false,
        isProfileSideNav:false,
        isActiveSubject:false,
        isActiveJournal:false,
        isActiveLesson:false
    },
    reducers:{
        visibleMenu:(state,action)=>{
            state.isMenuVisible=action.payload;
        },
        visibleProfileFilter:(state,action)=>{
            state.isProfileFilter=action.payload;
        }
        ,
        visibleProfileSideNav:(state,action)=>{
            state.isProfileSideNav=action.payload;
        },
        activateSubject:(state,action)=>{
            state.isActiveSubject=action.payload;
        },
        activateJournal:(state,action)=>{
            state.isActiveJournal=action.payload;
        },
        activateLesson:(state,action)=>{
            state.isActiveLesson=action.payload;
        }
    }
});

export const {visibleMenu,visibleProfileFilter,visibleProfileSideNav,activateSubject,activateJournal,activateLesson} =centerNavSlice.actions;

export default centerNavSlice.reducer;