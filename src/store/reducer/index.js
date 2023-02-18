import { combineReducers } from "@reduxjs/toolkit";
import doctor from './doctor';
import patient from './patient';

export default combineReducers({patient,doctor})
