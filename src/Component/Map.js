/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";

const { kakao } = window;

const Map = () => {
    useEffect(() => {
        const container = document.getElementById("map");

        const options = {
            center: new window.kakao.maps.LatLng(35.85133, 127.734086),
            level: 13,
        };

        const map = new window.kakao.maps.Map(container, options);

        console.log("loading kakaomap");
    }, []);

    return (
        <div>
            <div id="map" style={{width: '100%', height: '800px', position: 'relative', overflow: 'hidden'}}/>
        </div>
    );
};

export default Map;