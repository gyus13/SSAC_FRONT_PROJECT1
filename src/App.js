import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Navigation from "./Component/Navigation";
import Header from "./Component/Header";
import Category from "./Component/Category";
import Feed from "./Component/Feed";
import Map from "./Component/Map";
import Footer from "./Component/Footer";
import Detail from './Component/Detail';
import "./Component/Detail.css";
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOnClick = ()=> {
      setModalIsOpen(true);
      document.body.style.overflow = "hidden";
  }

  const handleOnClose = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "unset"
  }

  return (
    <div className="App">
      {
                modalIsOpen === true 
                ? <Detail handleOnClose={handleOnClose}></Detail>
                : null
      }     
      <Navigation></Navigation>
      <div className="navagation_div"></div>
      <Header></Header>
      <Category></Category>
      
      <Route path ="/feed">
      <Feed handleOnClick={handleOnClick} ></Feed>
      </Route>

      <Route path ="/map">
        <RenderAfterNavermapsLoaded
          ncpClientId={'5n5wk9vsd4'} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <Map />
        </RenderAfterNavermapsLoaded>
      </Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
