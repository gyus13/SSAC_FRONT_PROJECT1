import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Navigation from "./Component/Navigation";
import Header from "./Component/Header";
import Category from "./Component/Category";
import Feed from "./Component/Feed";
import Footer from "./Component/Footer";
import Detail from './Component/Detail';
import "./Component/Detail.css";

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
      </Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
