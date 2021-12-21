import Detail from "./Detail";

const ItemImg = ({ img }) => {
    const { id, url } = img;
    return (
        <div className="item">
            <img alt={id} src={url} />
        </div>
    );
}

const Item = ({ stores,handleOnClick }) => {
    const { id, content, title, score, img } = stores;

    return (
        <div>

        <div className="feed">
            
            <div className="feed-container" onClick={handleOnClick}>
                <div className='feed__explain'>
                    <p className="feed__explain-name" >{title}</p>
                    <p className="feed__explain-rating" >★ {score}</p>
                    <p className="feed__explain-content">
                        {content}
                    </p>
                </div>

                <div className="feed__item-container">
                    {
                        img.map((a, i) => {
                            return <ItemImg img={a} key={i}></ItemImg>
                        })}
                </div>
                
                  
            </div>
            
        </div>
        </div>
    )
}

export default Item; 