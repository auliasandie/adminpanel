import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import { getDataTopic } from '../reducer/getDataTopic'
import { getDataCrawling } from '../reducer/getDataCrawling'
import { createTopicReducer } from '../reducer/scrapingreducer'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  createTopicReducer,
  getDataTopic,
  getDataCrawling
  

})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga()])
}
