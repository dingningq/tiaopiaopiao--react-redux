// reducers/index.js
import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理
import movie from './movie.js' // 引入cinema这个reducer
import cinema from './cinema.js'
import postIssues from './index.js' // 引入cinema这个reducer

export default combineReducers({
    movie,
    cinema,
    postIssues,
    routing: routerReducer
})