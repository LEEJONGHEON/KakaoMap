import React, {useEffect} from "react";

const { kakao } = window;
const SearchMap = ({query, setQuery,type}) => {
    useEffect(() => {
        const infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const container = document.getElementById("map");

        const options = {
            center: new window.kakao.maps.LatLng(35.85133, 127.734086),
            level: 13,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places();

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        const placesSearchCB = (data, status, pagination) => {
            if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds();

                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            }
        }

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(query, placesSearchCB);


        // 지도에 마커를 표시하는 함수입니다
        const displayMarker = (place) => {

            // 마커를 생성하고 지도에 표시합니다
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }
    }, [query]);

    const onEnter = (e) => {
        if(e.key === 'Enter') {
            setQuery(e.target.value + type);
            console.log(query)
        }
    }
    return (
        <div>
            <p>주변 {type} 검색</p>
            입력 : <input onKeyDown={onEnter}/>
            <div id="map" style={{width: '100%', height: '800px', position: 'relative', overflow: 'hidden'}}/>
        </div>
    );
}

export default SearchMap;