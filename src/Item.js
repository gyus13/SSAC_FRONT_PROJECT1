import stores from "./stores";

const Item = (props) => {

    function Url (props) {
        return (
            <div className="item-container">
                    <div className="item">
                        <img alt="food1" src={props.stores.img.url} />
                    </div>
                    <div className="item">
                        <img alt="food2" src={props.stores.img.url} />
                    </div>
                    <div className="item">
                        <img alt="food3" src={props.stores.img.url} />
                    </div>
                </div>
        )
    }
    
    return (
        <div>
            <div className="feed-container">
                <div className='explain'>
                    <p>{props.stores.title}</p> <p>{props.stores.content}</p> <p>{props.stores.score}</p>
                </div>
                    <Url></Url>
            </div>
        </div>
    )
}

export default Item;