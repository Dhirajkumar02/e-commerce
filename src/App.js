import './App.css';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';


function App() {
  return (
    <div className="">
      <Navigation />

      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
