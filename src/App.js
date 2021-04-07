import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar.js"
import Content from "./Content.js"
import Description from "./Description.js"
import Product from "./Product.js"
import Information from "./Information.js"
import Footer from "./Footer.js"


function App() {
  return (
    <div>
       <NavBar/> 
      <Content/>
      <Description/>
      <Product/>
      <Information/>
      <Footer/>
    </div>
  );
}

export default App;
