const ItemImg = ({ img }) => {
    const { id, url } = img;
    return (
        <div className="item">
            <img alt={id} src={url} />
        </div>
    );
}

const Item = ({ stores }) => {
    const { id, content, title, score, img } = stores;
    return (
        <div>
            <div className="feed-container">
                <div className='explain'>
                    <p>{title}</p> <p>{content}</p> <p>{score}</p>
                </div>

                <div className="item-container">
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