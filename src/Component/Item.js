const ItemImg = ({ img }) => {
    const { id, url } = img;
    console.log(img);
    return (
        <div className="item">
            <img alt={id} src={url} />
        </div>
    );
}

const Item = ({ stores }) => {
    const { id, content, title, score, img } = stores;

    const handleOnClick = {

    }

    return (
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


    )
}

export default Item;