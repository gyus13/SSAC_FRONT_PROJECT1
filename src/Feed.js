import "./Feed.css";
import Navbar from "./Navbar";
import Item from "./Item";
import stores from "./stores";

import { Link, Route, Switch } from 'react-router-dom';

const Feed = () => {
    return (
        <div className="feed">
            <Navbar></Navbar>
            <div className="header"><b>구로구 맛집탐방</b></div>
            <hr />
            <div className="category">

            <Link to="/feed"><div>게시물</div></Link>
            <Link to="/map"><div>지도</div></Link>
            
            </div>
            <Route path="/feed">
                {
                    stores.map((a, i) => {
                        return <Item stores={stores[i]}></Item>
                    })}
            </Route>

            <Route path="/map">
                <p>지도 페이지 입니다.</p>
            </Route>
        </div>
    )
}

export default Feed;