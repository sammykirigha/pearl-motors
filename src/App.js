import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Details from './components/details/Details';
import Home from './components/Home';


function App() {
  return (
    <div className="container page">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
         <Route path='/details/:id'  component={Details} />  
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
