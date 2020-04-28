import React, { useContext, useState, useReducer } from 'react'
import { actionType, reducer, defaultData } from '@/src/context/globalState'
import * as Api from '../../api/api';

import './index.less';
import City from './../City'

function App() {
  const [state, dispatch] = useReducer(reducer, defaultData)
  const [isCityShow, changeCityShow] = useState(false);
  // const {cityConfig} = useContext(GlobalContext) // 获取全局状态
  const [pics, changePics] = useState([
    {
      name: '请上传照片',
      url: '',
      status: 0
    },
  ]);

  function handleCityEvent(item){
    changeCityShow(false);
    console.log(item);
    dispatch({
      type: actionType.SET_CITY,
      cityConfig:{cityName: item.name, cityCode: item.code}
    })
  }

  function fileChange(e, index){
    var fileObj = e.currentTarget.files[0];
    console.log(fileObj, index);
    
  }

  function submit(){
    Api.request({
      url: '/api/web/bd/jiaxiao-admin/submit.htm',
    }, function (){

    }, function(){

    })
  }


  return (
      <div className="App">
        <div>
          <span className="label">城市<i>*</i></span>
          <div className="input-w">
              <input type="text" name="cityName" onClick={()=>{changeCityShow(true)}} value={state.cityConfig.cityName} placeholder="请选择地区" readOnly={true}/>
              <input type="hidden" name="cityCode" value={state.cityConfig.cityCode}/>
          </div>
        </div>
        <City
          isShow={isCityShow}
          callback={(item) => handleCityEvent(item)}
        />

        {pics.map((obj, i) => (
            <div className="item" key={i}>
              <div className="pic-box">
                <input type="file" className="file" onChange={(e)=>fileChange(e, i)} accept="image/*"/>
              </div>
              <span>{obj.name}</span>
            </div>
        ))}
        

        <button type="button" onClick={submit} className="submit">提交</button>
      </div>
  );
}

export default App;


