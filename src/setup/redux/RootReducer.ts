import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import createTopicReducer from '../reducer/scrapingreducer'
import { getDataTopic } from '../reducer/getDataTopic'
import { getDataCrawling } from '../reducer/getDataCrawling'

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
