// Import modules/libraries
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// Create Generator Functions
function* watcherSaga() {
  yield takeLatest('REQUEST_GIPHY_SEARCH', workerSaga);
}

function fetchServerGiphy(searchQuery) {
  return axios({
    method: 'POST',
    url: '/api/search',
    data: { searchQuery },
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchServerGiphy, action.searchString);
    yield put({ type: 'GIPHY_SEARCH_SUCCESS', giphyResults: response.data });
  } catch (error) {
    yield put({ type: 'GIPHY_SEARCH_FAILURE', error });
  }
}

export default { watcherSaga };
