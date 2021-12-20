import "../App.css"
import { Link} from 'react-router-dom';

const Category = () => {
    return(
        <div className="category">
            <hr/>
            <div className="category__wrapper">
                <div className="category__info">
                <Link to="/feed"><span>정보</span></Link>    
                </div>
        
                <div className="category__map">
                <Link to="/map"><span>지도</span></Link>
                </div>  
            </div>
        </div>
    )
}

export default Category