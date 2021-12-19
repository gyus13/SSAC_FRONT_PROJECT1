import "../App.css"

const Category = () => {
    return(
        <div className="category">
            <hr/>
            <div className="category__wrapper">
                <div className="category__info">
                    <a href="index.html">
                        <img src="img/feed_icon.png" alt="피드 아이콘"></img>
                        <span>정보</span>
                    </a>
                </div>
        
                <div className="category__map">
                    <a href="map.html">
                        <img src="img/map_icon.png" alt="지도 아이콘"></img>
                        <span>지도</span>
                    </a>
                </div>  
            </div>
        </div>
    )
}

export default Category