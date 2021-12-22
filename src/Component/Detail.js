import "./Detail.css";

const Detail = ({handleOnClose}) => {
    return (
    <div className="modal">
        <div className="modal-background" onClick={handleOnClose}>
          <div className="modal__card">
            <div className="modal__card-img">
              <img alt="0" src="img/china0.jpg"></img>
            </div>
            <div className="modal__card-content">
              <div className="modal__card-header"> <p>프로필</p> </div>
              <div className="modal__card-main"> <p>메인</p> </div>
              <div className="modal__card-footter"></div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Detail;