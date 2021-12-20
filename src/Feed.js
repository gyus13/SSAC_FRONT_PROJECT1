import "./Feed.css";
import Navbar from "./Navbar";
import Item from "./Item";
import stores from "./stores";
import Login from "./Login";

import { Link, Route, Switch } from 'react-router-dom';

const Feed = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="feed">
                <div className="header"> </div>
                <hr />
                <div className="category">

                    <Link to="/feed"><div>게시물</div></Link>
                    <Link to="/map"><div>지도</div></Link>

                </div>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/feed">
                    {
                        stores.map((a, i) => {
                            return <Item stores={a} key={i}></Item>
                        }
                        )
                    }
                </Route>

                <Route path="/map">
                    <p>지도 페이지 입니다.</p>
                </Route>
            </div>
        </div>
    )
}

export default Feed;