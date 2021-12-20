import "../App.css"
import { NaverMap,Marker } from "react-naver-maps";

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
                defaultZoom={17} // 지도 초기 확대 배율
            >
                <Marker
                    key={0}
                    position={new navermaps.LatLng(37.47238731740359, 126.89602897456294)}
                    // icon={
                    //     {
                    //         url: 'img/my_marker.png',
                    //         size: new navermaps.Size(50, 50),
                    //         origin: new navermaps.Point(0, 0),
                    //         anchor: new navermaps.Point(25, 25),
                    //     }
                    // }
                    onClick={() => {alert('현 위치');}}
                />
            </NaverMap>
        </div>
    );
}

export default Map