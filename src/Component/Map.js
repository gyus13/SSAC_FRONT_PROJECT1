import "../App.css"
import {NaverMap,Marker}  from "react-naver-maps"
import my_Marker from "../img/my_marker.png";
import map_Marker from "../img/map_marker.png";

const Map = () => {
    const navermaps = window.naver.maps;
    return (
        <div className="main">
            <NaverMap
                className="map-container"
                mapDivId={'map'} // default: react-naver-map
                style={{
                width: '100%', // 네이버지도 가로 길이
                height: '85vh' // 네이버지도 세로 길이
                }}

                defaultCenter={{ lat: 37.47238731740359, lng: 126.89602897456294 }} // 지도 초기 위치
                defaultZoom={16} // 지도 초기 확대 배율
            >

                <Marker
                    key={0}
                    position={new navermaps.LatLng(37.47238731740359,126.89602897456294)}
                    icon={{
                        url: my_Marker,
                    }}
                >
                </Marker>


                <Marker
                    key={1}
                    position={new navermaps.LatLng(37.468653572531856, 126.89535025189723)}
                    icon={{
                        url: map_Marker,
                    }}
                >
                </Marker>


                <Marker
                    key={2}
                    position={new navermaps.LatLng(37.46955246261429, 126.89905664026355)}
                    icon={{
                        url: map_Marker,
                    }}
                >
                </Marker>


                <Marker
                    key={3}
                    position={new navermaps.LatLng(37.4736118303616, 126.89517717590284)}
                    icon={{
                        url: map_Marker,
                    }}
                >
                </Marker>


                <Marker
                    key={4}
                    position={new navermaps.LatLng(37.47045467981596, 126.89728648444668)}
                    icon={{
                        url: map_Marker,
                    }}
                >
                </Marker>


                <Marker
                    key={5}
                    position={new navermaps.LatLng(37.47167694499592, 126.90042325184629)}
                    icon={{
                        url: map_Marker,
                    }}
                >
                </Marker>


                <Marker
                    key={6}
                    position={new navermaps.LatLng(37.4724060587129, 126.89929374026363)}
                    icon={{
                        url: map_Marker,
                    }}
                >
                </Marker>
                
            </NaverMap>
        </div>
    );
}

export default Map