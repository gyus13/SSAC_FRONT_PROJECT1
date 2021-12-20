import "./Feed.css";

const Feed = () => {
  return (
    <div className="Feed">
      <div className="header">
        <b>구로구 맛집탐방</b>
      </div>
      <hr />
      <div className="Category">
        <div>게시물</div>
        <div>지도</div>
      </div>
      <div className="Feed-container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="Feed-container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="Feed-container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Feed;
