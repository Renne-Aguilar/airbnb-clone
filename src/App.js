import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterPage from './RegisterPage';
import AdPage from './AdPage';
import Message from './Chats/Message';

function App() {
  return (

    // BEM
    <div className="App">
      <Router>
      
        <Header />

        <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/adpage">
          <AdPage />
        </Route>

        <Route path="/message">
          <Message />
        </Route>
          

        <Route path="/">
          <Home />
        </Route>
       
        </Switch>
        <Footer />

      </ Router>
    
     </div>

  
  );
}

export default App;
