// import { useState } from "react";
// import "./App.css";
// import Modal from "react-modal";

// const Header = () => {
//   const [follow, setFollow] = useState(369369);
//   const onClick = () => setFollow(follow + 1);

//   return (
//     <div className="header">
//       <div className="header__profile">
//         <div className="header__profileimgwrapper">
//           <div className="header__profileimgwrapper-profileimg">
//             <img
//               src="profileimg_amil.jpg"
//               width="200"
//               height="200"
//               alt="프로필 이미지"
//             ></img>
//           </div>
//         </div>

//         <div className="header__profile-description">
//           <h1>군싹이</h1>
//           <button onClick={onClick}>팔로우</button>

//           <Modal isOpen={false}>모달달달</Modal>

//           <span>
//             <b>게시물: 10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 팔로워: {follow}</b>
//           </span>
//           <p>
//             군침이 싸악 도는 한국의 모든 맛집 탐구!
//             <br />
//             양식, 중식, 한식, 분식, 일식 등 가리지 않아요
//             <br />
//             🍲 🍛
//           </p>
//         </div>
//       </div>

//       <div className="header__link">
//         <div className="header__link-container"></div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import "./App.css";
import Modal from "react-modal";

const Header = () => {
  const [follow, setFollow] = useState(369369);
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    if (isClicked) {
      // follow button 이 click 되어있는 경우 -> unfollow 하는거니까 -1
      setFollow(follow - 1);
    } else {
      setFollow(follow + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div className="header">
      <div className="header__profile">
        <div className="header__profileimgwrapper">
          <div className="header__profileimgwrapper-profileimg">
            <img
              src="profileimg_amil.jpg"
              width="200"
              height="200"
              alt="프로필 이미지"
            ></img>
          </div>
        </div>

        <div className="header__profile-description">
          <h1>군싹이</h1>
          <button onClick={onClick}>{isClicked ? "팔로잉" : "팔로우"}</button>

          <Modal isOpen={false}>모달달달</Modal>

          <span>
            <b>게시물: 10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 팔로워: {follow}</b>
          </span>
          <p>
            군침이 싸악 도는 한국의 모든 맛집 탐구!
            <br />
            양식, 중식, 한식, 분식, 일식 등 가리지 않아요
            <br />
            🍲 🍛
          </p>
        </div>
      </div>

      <div className="header__link">
        <div className="header__link-container"></div>
      </div>
    </div>
  );
};

export default Header;
