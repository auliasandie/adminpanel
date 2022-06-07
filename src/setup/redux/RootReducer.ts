import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import createTopicReducer from '../reducer/scrapingreducer'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  createTopicReducer,

})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}
