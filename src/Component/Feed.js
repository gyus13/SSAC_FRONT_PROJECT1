import "../App.css"
import stores from "./stores"
import Item from "./Item"

const Feed = () => {
    return (
        <div className="main">

            {
                stores.map((a, i) => {
                    return <Item stores={a} key={i}></Item>
                }
                )
            }

        </div>
    )
}

export default Feed