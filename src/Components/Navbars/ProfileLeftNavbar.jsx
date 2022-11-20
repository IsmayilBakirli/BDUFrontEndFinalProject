import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { visibleProfileSideNav } from '../../Redux/features/Navbar/CenterNavSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { activateSubject, activateLesson, activateJournal} from '../../Redux/features/Navbar/CenterNavSlice';
import { activateTeacherTab } from '../../Redux/features/Profile/StudentProfileSlice';
export default function ProfileLeftNavbar() {
  var isVisible = useSelector((state) => state.centerNav.isProfileSideNav);
  var activaSubject = useSelector((state) => state.centerNav.isActiveSubject);
  var activeJournal = useSelector((state) => state.centerNav.isActiveJournal);
  var activeLesson = useSelector((state) => state.centerNav.isActiveLesson);
  var dispatch = useDispatch();
  return (
    <nav className='sideNav'>
      <p className='d-flex justify-content-between' onClick={() => dispatch(visibleProfileSideNav(!isVisible))} >Modullar <FontAwesomeIcon icon={faArrowDown} /></p>
      <ul className={`list-unstyled sidenav ${isVisible ? undefined : "d-none"}`}>
        <li onClick={() => {dispatch(activateSubject(!activaSubject)); dispatch(activateLesson(false)); dispatch(activateJournal(false));dispatch(activateTeacherTab(false)) }} className={activaSubject ? "active" : undefined}>Fənn üzrə qruplar
        </li>
        <li onClick={() => { dispatch(activateJournal(false)); dispatch(activateSubject(false)); dispatch(activateLesson(!activeLesson));dispatch(activateTeacherTab(false)) }} className={activeLesson ? "active" : undefined}>Dərs Cədvəli</li>
      </ul>
    </nav>

  )
}
