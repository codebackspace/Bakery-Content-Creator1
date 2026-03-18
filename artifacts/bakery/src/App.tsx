import React from 'react';
import { Switch, Route, Router as WouterRouter } from 'wouter';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { CartProvider } from './contexts/CartContext';

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <CartProvider>
      <WouterRouter base={base}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/checkout/success" component={CheckoutSuccess} />
            </Switch>
          </main>
          <Footer />
        </div>
      </WouterRouter>
    </CartProvider>
  );
}

export default App;
