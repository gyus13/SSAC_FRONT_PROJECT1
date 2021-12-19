import './App.css';
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
      <Feed></Feed>
      <Footer></Footer>
    </div>
  );
}

export default App;
