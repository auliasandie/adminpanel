import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { getDataReducer } from '../action/getDataReducer'
import { getDataTopic } from '../reducer/getDataTopic'
import { createTopicReducer } from '../reducer/scrapingreducer'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  getDataReducer,
  getDataTopic,
  createTopicReducer,
  

})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}
