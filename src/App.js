import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Details from './components/details/Details';
import Home from './components/Home';
import Cart from './components/cart/Cart';


function App() {
  return (
    <div className="container page">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/details/:id' component={Details} /> 
        <Route path='/cart/:id' component={Cart} />  
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
