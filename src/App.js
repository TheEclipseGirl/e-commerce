import './App.css';
import Nav from "./components/Nav";
import Link from "./components/Link";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Link/>
      <ProductContainer/>
    </div>
  );
}

export default App;
