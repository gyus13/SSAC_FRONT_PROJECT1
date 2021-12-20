import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Navigation from "./Component/Navigation";
import Header from "./Component/Header";
import Category from "./Component/Category";
import Feed from "./Component/Feed";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="navagation_div"></div>
      <Header></Header>
      <Category></Category>
      
      <Route path ="/feed">
      <Feed></Feed>
      </Route>

      <Route path ="/map">
        <p>맵 페이지 입니다.</p>
        </Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
