import "./Feed.css";
import Navbar from "./Navbar";
import Item from "./Item";
import stores from "./stores";

const Feed = () => {
    return (
        <div className="feed">
            <Navbar></Navbar>
            <div className="header"><b>구로구 맛집탐방</b></div>
            <hr />
            <div className="category">
                <div>게시물</div>
                <div>지도</div>
            </div>
            {
                stores.map((a, i)=> {
                    return <Item stores={stores[i]}></Item>
                })}


        </div>
    )
}

export default Feed;