import React from 'react'
import { createContext, useReducer } from 'react'

// Store 默认值
const defaultData = {
  cityConfig: {
    cityName: '武汉',
    cityCode: '420100',
    isShow: false
  }
}

// dispatch 参数
const actionType = {
  SET_CITY: 'SET_CITY',    // 重置城市信息
}

// 接收并处理 dispatch() 推送过来的 Type 和 Data
function reducer (state, action) {
  switch (action.type) {
    case actionType.SET_CITY:
      return { ...state, cityConfig: action.cityConfig}
    default:
      return state
  }
}

// 全局上下文
const GlobalContext = createContext(defaultData)


export {
  GlobalContext,
  actionType,
  reducer,
  defaultData
}
