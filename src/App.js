import './App.css';
import Navigation from "./Component/Navigation";
import Header from "./Component/Header";
import Category from "./Component/Category";
import Map from "./Component/Map"
import Footer from "./Component/Footer";
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="navagation_div"></div>
      <Header></Header>
      <Category></Category>
      <RenderAfterNavermapsLoaded
        ncpClientId={'5n5wk9vsd4'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <Map />
      </RenderAfterNavermapsLoaded>
      <Footer></Footer>
    </div>
  );
}

export default App;
