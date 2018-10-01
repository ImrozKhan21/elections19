import { Action } from '@ngrx/store'
import { AppData} from '../models/app.constants';
import * as HomeActions from './../actions/home.actions'

// Section 1
const initialState: AppData = {
  provinceState: '',
  constituencyState: '',
  ministerState: ''
};

// Section 2
export function reducer(state: AppData = initialState, action: HomeActions.Actions) {
  // Section 3
  switch(action.type) {
    case HomeActions.ADD_PROVINCE:
      return {...state, provinceState: action.payload};
    case HomeActions.ADD_CONSTITUENCY:
      return {...state, constituencyState: action.payload};
    case HomeActions.ADD_MINISTER:
      return {...state, ministerState: action.payload};
    default:
      return state;
  }
}
