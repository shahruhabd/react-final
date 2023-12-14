import Footer from "./components/Footer";
import Products from "./components/Products";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Catalog />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
