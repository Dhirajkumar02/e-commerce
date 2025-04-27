import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="">
      <Navigation />

      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
