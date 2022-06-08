import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import createTopicReducer from '../reducer/scrapingreducer'
import { getDataReducer } from '../action/getDataReducer'
import { getDataTopic } from '../reducer/getDataTopic'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  createTopicReducer,
  getDataReducer,
  getDataTopic
  

})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}
