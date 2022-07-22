import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { get } from './Reducer';
import {sagaActions} from './Action';

let callAPI = async ({ url, method, data }) => {
    return await Axios({
      url,
      method,
      data
    });
  };

  export function* fetchDataSaga() {
    try {
      let result = yield call(() =>
        callAPI({ url: "http://localhost:4000/items" })
      );
      yield put(get(result.data));
    } catch (e) {
      yield put({ type: "TODO_FETCH_FAILED" });
    }
  }

function* itemSaga(){
    yield takeEvery(sagaActions.GET_FOOD_ITEMS, fetchDataSaga);
}

export default itemSaga;