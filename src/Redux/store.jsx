import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/Search/SearchSlice';
import centerNavReducer from './features/Navbar/CenterNavSlice';
import userReducer from './features/User/UserSlice';
import newsReducer from './features/News/News';
import registerReducer from './features/User/RegisterSlice';
import slidersReducer from "./features/Sliders/SliderSlice";
import katibReducer from "./features/Katib/KatibSlice";
import discoverReducer from "./features/Discover/DiscoverSlice";
import rektorReducer from './features/Rektor/RektorSlice';
import teacherReducer from './features/Teacher/TeacherSlice';
import StudentProfileReducer from './features/Profile/StudentProfileSlice';
export const store = configureStore({
    reducer: {
        search: searchReducer,
        centerNav:centerNavReducer,
        user:userReducer,
        news:newsReducer,
        register:registerReducer,
        sliders:slidersReducer,
        katib:katibReducer,
        discover:discoverReducer,
        rektor:rektorReducer,
        teacher:teacherReducer,
        studentProfile:StudentProfileReducer
    }
});