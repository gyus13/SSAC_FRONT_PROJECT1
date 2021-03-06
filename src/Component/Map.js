import "../App.css"
import {NaverMap,Marker}  from "react-naver-maps"
import my_Marker from "../my_marker.png";
import map_Marker from "../map_marker.png";

const Map = () => {

    const navermaps = window.naver.maps;

    //매장 위도,경도 [[배열]]
    const LatLngs = [
        [37.468653572531856, 126.89535025189723], 
        [37.46955246261429, 126.89905664026355],
        [37.4736118303616, 126.89517717590284],
        [37.47045467981596, 126.89728648444668], 
        [37.47167694499592, 126.90042325184629],
        [37.4724060587129, 126.89929374026363]
    ]

    return (
        <div className="main">
            <NaverMap
                className="map-container"
                mapDivId={'map'} // default: react-naver-map
                style={{
                width: '100%', // 네이버지도 가로 길이
                height: '85vh' // 네이버지도 세로 길이
                }}

                defaultCenter={{ lat: 37.47238731740359, lng: 126.89602897456294 }} // 지도 초기 위치 : SSAC
                defaultZoom={16} // 지도 초기 확대 배율
            >
                {/* SSac 마커 */}
                <Marker
                    position={new navermaps.LatLng(37.47238731740359, 126.89602897456294)}
                    icon={{
                        url: my_Marker,
                        size: new navermaps.Size(50, 50),
                        origin: new navermaps.Point(0, 0),
                        anchor: new navermaps.Point(25, 25)
                    }}
                />

                {/*매장들 마커 */}
                {LatLngs.map((LatLng, i) => (
                    <Marker 
                        key={i}
                        position = {new navermaps.LatLng(LatLngs[i][0],LatLngs[i][1])}
                        icon={{
                            url: map_Marker,
                            size: new navermaps.Size(50, 50),
                            origin: new navermaps.Point(0, 0),
                            anchor: new navermaps.Point(25, 25)
                        }}
                        
                    />))
                }

            </NaverMap>
        </div>
    );
}

export default Map