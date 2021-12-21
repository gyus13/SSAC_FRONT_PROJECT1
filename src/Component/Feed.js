import "../App.css"
import stores from "./stores"
import Item from "./Item"

const Feed = ({handleOnClick}) => {
    return (
        <div className="main">

            {
                stores.map((a, i) => {
                    return <Item stores={a} key={i} handleOnClick={handleOnClick}></Item>
                }
                )
            }

        </div>
    )
}

export default Feed