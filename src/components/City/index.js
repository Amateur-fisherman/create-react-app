import React from 'react';
import './index.less';
import {shouzimuList, shouzimuMaps, hotDistrict} from './district'


function City(props) {
    let {isShow, callback} = props;

    function chooseCityEvent(item) {
        callback(item);
    }

    function goTop() {
        document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:auto');
        setTimeout(function () {
            document.getElementById('city').scrollTop = 0;
            document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:touch');
        }, 50);
    }

    function go(e) {
        var target = document.getElementById(e);
        document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:auto');
        setTimeout(function () {
            document.getElementById('city').scrollTop = target.offsetParent.offsetTop;
            document.getElementById('city').setAttribute('style', '-webkit-overflow-scrolling:touch');
        }, 50);
    }
  
    return (
        !!isShow && <div className="city-wrap">
            <div className="city" id="city">
                <div id="hot" className="hot-wrap">
                    <div className="hot-t">热门城市</div>
                        {hotDistrict.map((obj, i) => (
                            <div className="hot-r" key={i}>
                                {obj.map((item, j) => (
                                    <div className="hot-item" key={j}>
                                        <div className="hot-txt" onClick={() => chooseCityEvent(item)}>{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
                
                {shouzimuList.map((obj, i) => (
                    <div className="zimu-wrap" key={i}>
                        <div className="zimu-t" id={obj}>{obj}</div>
                        {shouzimuMaps[obj].map((item, j) => (
                            <div className="zimu-d" key={j}>
                                <span onClick={() => chooseCityEvent(item)}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="zimu-nav">
                <div data-id="hot" onClick={goTop}>#</div>
                {shouzimuList.map((item, i) => (
                    <div onClick={() => go(item)} key={i}>{item}</div>
                ))}
            </div>
        </div>
    );
}


export default City;