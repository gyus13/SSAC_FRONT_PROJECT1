import "./Detail.css";

const Detail = ({handleOnClose}) => {
    return (
    <div className="modal">
        <div className="modal-background" onClick={handleOnClose}>
          <div className="modal__card">
            <div className="modal-background__card-img">
              <img alt="0" src="img/china0.jpg"></img>
            </div>
            <div className="modal-background__card-content">
              <div className=""></div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Detail;